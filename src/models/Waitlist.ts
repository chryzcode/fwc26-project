import mongoose from 'mongoose';

export interface IWaitlist {
  name: string;
  email: string;
  matchId: number;
  matchDetails: string;
  stripePaymentId: string;
  stripeSessionId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  emailSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const waitlistSchema = new mongoose.Schema<IWaitlist>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  matchId: {
    type: Number,
    required: true,
  },
  matchDetails: {
    type: String,
    required: true,
    trim: true,
  },
  stripePaymentId: {
    type: String,
    required: true,
  },
  stripeSessionId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 9.99,
  },
  currency: {
    type: String,
    required: true,
    default: 'CAD',
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  emailSent: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Create indexes for better query performance
waitlistSchema.index({ email: 1, matchId: 1 });
waitlistSchema.index({ stripePaymentId: 1 });
waitlistSchema.index({ status: 1 });

const Waitlist = mongoose.models.Waitlist || mongoose.model<IWaitlist>('Waitlist', waitlistSchema);

export default Waitlist;
