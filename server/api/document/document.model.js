'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './document.events';

let DocumentSchema = new mongoose.Schema({
  name : {
    type      : String,
    required  : true,
    maxlength : 100
  },
  description : {
    type      : String,
    maxlength : 1000
  },
  createdAt : {
    type    : Date,
    default : Date.now
  },
  editedAt : {
    type    : Date,
    default : Date.now
  },
  creator : {
    type     : String,
    required : true
  },
  html : {
    type    : String,
    default : ''
  }
});

registerEvents(DocumentSchema);
export default mongoose.model('Document', DocumentSchema);
