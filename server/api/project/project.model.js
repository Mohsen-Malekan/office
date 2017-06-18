'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './project.events';

let ProjectSchema = new mongoose.Schema({
  name        : {
    type     : String,
    required : true
  },
  description : String,
  createdAt   : {
    type    : Date,
    default : Date.now
  },
  creator     : {
    type     : String,
    required : true
  }
});

registerEvents(ProjectSchema);
export default mongoose.model('Project', ProjectSchema);
