import mongoose from "mongoose";

import bcrypt from "bcrypt-nodejs";

// Define the model
const userSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
    },
    last: {
      type: String,
    },
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },

  headline: {
    type: String,
  },
  location: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  position: {
    role: {
      type: String,
    },
    office: {
      type: String,
    },
  },
  bio: {
    type: String,
  },
  connection: {
    pending: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    accepted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  avatarUrl: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", function (next) {
  // get access to user model, then we can use user.email, user.password
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

// Make use of methods for comparedPassword
userSchema.methods.comparedPassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, good) {
    if (err) {
      return cb(err);
    }
    cb(null, good);
  });
};

// Export the model
export default mongoose.model("User", userSchema);
