import mongoose from 'mongoose'
const { Schema } = mongoose

const wineSchema = new Schema(
  {
    name: {
      required: [true, 'Name is required!'],
      type: String,
      trim: true
    },
    imageUrl: {
      required: [true, 'Image url is required!'],
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    year: {
      required: [true, 'Year is required!'],
      type: Number,
      trim: true
    },
    type: {
      required: [true, 'Type is required!'],
      type: String,
      trim: true
    },
    ABV: {
      required: [true, 'ABV is required!'],
      type: Number,
      trim: true
    },
    color: {
      required: [true, 'Color is required!'],
      type: String,
      trim: true
    },
    size: {
      type: Number,
      trim: true
    },
    price: {
      required: [true, 'Price is required!'],
      type: Number,
      trim: true
    },
    description: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
)

export const wine = mongoose.model('Wine', wineSchema)
