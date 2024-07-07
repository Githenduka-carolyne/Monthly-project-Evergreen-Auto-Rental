import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addCarDetails = async (req, res) => {
  const { title, description, price } = req.body;
  console.log("Request Body:", req.body);

  try {
    const newCar = await prisma.cars.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price), 
      },
    });
    res.status(201).json({ success: true, data: newCar });
  } catch (e) {
    console.error("Error adding car details:", e); 
    res.status(500).json({ success: false, message: e.message });
  }
};