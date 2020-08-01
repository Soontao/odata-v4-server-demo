import { Class } from './Class';
import { Profile } from './Profile';
import { RelStudentClassAssignment } from './Rel';
import { Student } from './Student';
import { Teacher } from './Teacher';

export {
  Class, Student, Teacher, RelStudentClassAssignment, Profile
};

export const SchoolEntities = [Class, Teacher, RelStudentClassAssignment, Profile, Student];
