'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './document.events';

let DocumentSchema = new mongoose.Schema({
  name : {
    type     : String,
    required : true
  },
  description : String,
  createdAt   : {
    type    : Date,
    default : Date.now
  },
  creator : {
    type     : String,
    required : true
  }
});

registerEvents(DocumentSchema);
export default mongoose.model('Document', DocumentSchema);
