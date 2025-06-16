import Order from "../Models/Orders.js";
import User from "../Models/User.js";
import SendMail from "../middleware/SendMail.js";


export const createOrder = async (req, res) => {
  try {
    const { date, time, seats, message } = req.body;
    const userId = req.user?.id;

    if (!date || !time || !seats) {
      return res.status(400).json({ message: "Date, time, and seats are required." });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const order = await Order.create({
      user: userId,
      date,
      time,
      seats,
      message,
    });

    // ✉️ Email to the User
    await SendMail(
      user.email,
      "✅ Hotel Reservation Confirmation",
      `
      <h2>Reservation Confirmation</h2>
      <p>Dear ${user.name},</p>
      <p>Thank you for choosing our hotel booking service.</p>
      <p>Your reservation has been successfully submitted with the following details:</p>
      <ul>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Number of Guests:</strong> ${seats}</li>
        <li><strong>Additional Message:</strong> ${message || "N/A"}</li>
      </ul>
      <p>We will contact you shortly to confirm the details and finalize your booking.</p>
      <br />
      <p>Warm regards,<br /><strong>The Hotel Booking Team</strong></p>
      `
    );

    // ✉️ Email to the Admin
    await SendMail(
      "shakeel7521951@gmail.com", // Replace with your admin email
      "📩 New Hotel Reservation Submitted",
      `
      <h2>New Reservation Alert</h2>
      <p>Dear Admin,</p>
      <p>A new hotel reservation has been submitted with the following details:</p>
      <ul>
        <li><strong>Name:</strong> ${user.name}</li>
        <li><strong>Email:</strong> ${user.email}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Number of Guests:</strong> ${seats}</li>
        <li><strong>Message:</strong> ${message || "N/A"}</li>
      </ul>
      <p>Please review and process the reservation accordingly.</p>
      <br />
      <p>Best regards,<br /><strong>Hotel Booking System</strong></p>
      `
    );

    res.status(201).json({
      success: true,
      message: "Reservation created successfully and notifications sent.",
      order,
    });

  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email phone")
      .sort({ date: 1, time: 1 });
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get orders. Please try again.",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ success: false, message: "Status is required" });
  }

  try {
    const order = await Order.findById(orderId).populate("user");

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    order.status = status;
    await order.save();

    const user = order.user;

    await SendMail(
      user.email,
      `🔄 Reservation Status Updated: ${status}`,
      `
      <h2>Reservation Status Update</h2>
      <p>Dear ${user.name},</p>
      <p>We would like to inform you that the status of your hotel reservation has been updated.</p>
      <ul>
        <li><strong>Reservation ID:</strong> ${order._id}</li>
        <li><strong>New Status:</strong> ${status}</li>
        <li><strong>Date:</strong> ${order.date}</li>
        <li><strong>Time:</strong> ${order.time}</li>
      </ul>
      <p>If you have any questions or require further assistance, please feel free to contact our support team.</p>
      <br />
      <p>Best regards,<br /><strong>The Hotel Booking Team</strong></p>
      `
    );

    res.status(200).json({
      success: true,
      message: "Order status updated and email sent to user.",
      order,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update order status",
    });
  }
};

export const userOrders = async (req, res) => {
  try {
    const userId = req.user?.id;

    const orders = await Order.find({ user: userId }).sort({ date: -1 });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch user orders" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found or already deleted" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Delete Order Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

