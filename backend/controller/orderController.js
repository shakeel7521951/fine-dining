import Order from "../Models/Orders.js";

export const createOrder = async (req, res) => {
  try {
    const { date, time, seats, message } = req.body;
    const userId = req.user?.id;

    // Basic validation
    if (!date || !time || !seats) {
      return res
        .status(400)
        .json({ message: "Date, time, and seats are required." });
    }

    const order = await Order.create({
      user: userId,
      date,
      time,
      seats,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Reservation created successfully.",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
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
    return res
      .status(400)
      .json({ success: false, message: "Status is required" });
  }

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res
      .status(200)
      .json({ success: true, message: "Order status updated", order });
  } catch (error) {
    console.error("Error updating order status:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update order status" });
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

