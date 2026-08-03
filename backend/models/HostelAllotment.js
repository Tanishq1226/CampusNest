import mongoose from 'mongoose';

const hostelAllotmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HostelRoom'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  },
  feeAmount: {
    type: Number,
    default: 0
  },
  preferredBlock: {
    type: String,
    trim: true
  },
  preferredFloor: {
    type: Number
  },
  rejectionReason: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('HostelAllotment', hostelAllotmentSchema);
