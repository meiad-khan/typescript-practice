//kichu property lagbei. strict rules set kore deya... 
//here a student can't be added if he has no id , name and date of birth..

type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
}

const addStudentToCollege = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next level web development",
    ...studentInfo,
  };
};

const student1 = {
  id: 34,
  name: "sohan",
  dateOfBirth: '23/23/23',
  hasCar: true,
};
const student2 = {
  id: 23,
  name: "shafinur",
  dateOfBirth:'34/33/34',
  hasCar: false,
};
console.log(addStudentToCollege(student1));

