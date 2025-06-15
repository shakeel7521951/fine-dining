import Menu from "../Models/Menu.js";

export const createMenu = async (req, res) => {
  try {
    const { title, price, category, image } = req.body;

    if (!title || !price || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMenu = new Menu({ title, price, category, image });
    await newMenu.save();

    res.status(201).json({ message: "Menu item created successfully", menu: newMenu });
  } catch (error) {
    res.status(500).json({ message: "Failed to create menu item", error: error.message });
  }
};

export const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu items", error: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMenu = await Menu.findByIdAndDelete(id);
    if (!deletedMenu) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete menu item", error: error.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, category, image } = req.body;

    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { title, price, category, image },
      { new: true, runValidators: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({ message: "Menu item updated successfully", menu: updatedMenu });
  } catch (error) {
    res.status(500).json({ message: "Failed to update menu item", error: error.message });
  }
};
