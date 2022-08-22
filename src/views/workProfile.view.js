const httpStatus = require("http-status");

const workProfileView = (workProfileSequelize) => {
  // console.log(workProfileSequelize)
  const {
    id,
    country,
    phone_number,
    city,
    cv_url,
    linkedin_url,
    github_url,
    featured_project,
    other_technologies_comment,
    ideal_work_comment,
    educational_level,
    relocation_option,
    dev_experience,
    design_experience,
    data_experience,
    gender,
    english_level,
    work_availability,
    education_status,
    visa,
    createdAt,
    updatedAt,
    User,
    Databases,
    DevLanguages,
    Tools,
    EducationExperiences,
    SoftSkills,
  } = workProfileSequelize;


  return {
    status: httpStatus.OK,
    message: "OK",
    data: {
      work_profile: {
        id: id,
        country: country,
        phone_number: phone_number,
        city: city,
        cv_url: cv_url,
        linkedin_url: linkedin_url,
        github_url: github_url,
        featured_project: featured_project,
        other_technologies_comment: other_technologies_comment,
        ideal_work_comment: ideal_work_comment,
        educational_level: educational_level,
        relocation_option: relocation_option,
        dev_experience: dev_experience,
        design_experience: design_experience,
        data_experience: data_experience,
        gender: gender,
        english_level: english_level,
        work_availability: work_availability,
        education_status: education_status,
        visa: visa,
        created_at: createdAt,
        updated_at: updatedAt,
        user: {
          id: User.id,
          user_status_id: User.userStatus_id,
          name: User.name,
          last_name: User.lastname,
          email: User.email,
        },
        education_experiences: EducationExperiences.map((item) => ({
          name: item.name,
          institute_name: item.institute_name,
          type: item.type,
          area: item.area,
          graduation_year: item.graduation_year,
        })),
        databases: Databases.map((item) => ({
          name: item.name,
          level: item.WorkProfileDatabase.level,
        })),
        dev_languages: DevLanguages.map((item) => ({
          name: item.name,
          level: item.WorkProfileDevLanguage.level,
        })),
        tools: Tools.map((item) => ({
          name: item.name,
        })),
        soft_skills: SoftSkills.map((item) => ({
          name: item.name,
        })),
      },
    },
  };
};

module.exports = workProfileView;
