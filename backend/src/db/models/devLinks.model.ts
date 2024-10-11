import mongoose, { Schema, Document, Types } from 'mongoose';

// Define an interface representing a link object in DevLinks.
export interface ILink {
  platform: string;
  link: string;
}

// Define an interface for DevLinks which extends the Mongoose Document.
export interface IDevLinks extends Document {
  userId: Types.ObjectId; // Reference to the User schema
  links?: ILink[]; // Array of link objects
}

// Create a Schema corresponding to the document interface.
const devLinksSchema: Schema<IDevLinks> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    links: [
      {
        platform: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

// Create the Mongoose model.
const DevLinks = mongoose.model<IDevLinks>('DevLinks', devLinksSchema);

export default DevLinks;
