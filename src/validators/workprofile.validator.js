const { body, param } = require("express-validator");
const {
    userService,
    databasesService,
    devLanguagesService,
    softSkillService,
    toolService,
} = require("../services");

const validateFieldsWorkProfile = [
    body("*.user_id")
        .exists()
        .notEmpty()
        .isInt()
        .withMessage("Debe ingresar un Numero entero")
        .custom(async (value) => {
            const user = await userService.getUserById(value)
            if (!user) {
                return Promise.reject("El usuario no existe");
            }
        }),
    body("*.gender").exists().notEmpty().withMessage("Debe elegir un género"),
    body("*.phone_number")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar un numero de teléfono"),
    body("*.city").exists().notEmpty().withMessage("Debe seleccionar una ciudad"),
    body("*.country").exists().notEmpty().withMessage("Debe seleccionar un País"),
    body("*.education_status")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su estado educacional"),
    body("*.english_level")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su nivel de Inglés"),
    body("*.cv_url")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar la dirección de su curriculum")
        .isURL({ require_tld: false })
        .withMessage("Debe ser una dirección con formato correcto"),
    body("*.linkedin_url")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar la dirección de su Linkedin")
        .isURL({ require_tld: false })
        .withMessage("Debe ser una dirección con formato correcto"),
    body("*.github_url")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar la dirección de su GitHub")
        .isURL({ require_tld: false })
        .withMessage("Debe ser una direccion con formato correcto"),
    body("*.featured_project")
        .isLength({ min: 0, max: 255 })
        .withMessage("Sobrepaso el maximo de caracteres permitidos"),
    body("*.work_availability")
        .exists()
        .notEmpty()
        .withMessage("Debe indicar su disponibilidad"),
    body("*.dev_experience")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su experiencia"),
    body("*.design_experience")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su experiencia"),
    body("*.data_experience")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su experiencia"),
    body("*.educational_level")
        .exists()
        .notEmpty()
        .withMessage("Debe señalar su nivel educacional"),
    body("*.other_technologies_comment")
        .isLength({ min: 0, max: 255 })
        .withMessage("Sobrepaso el maximo de caracteres permitidos"),
    body("*.ideal_work_comment")
        .isLength({ min: 0, max: 255 })
        .withMessage("Sobrepaso el maximo de caracteres permitidos"),
    body("*.relocation_option")
        .exists()
        .notEmpty()
        .withMessage("Debe indicar su disponibilidad laboral"),
    body("*.visa")
        .exists()
        .notEmpty()
        .withMessage("Debe seleccionar su estado de visa"),
    body("*.databases.[*].database_id")
        .exists()
        .notEmpty()
        .withMessage("Debe elegir al menos una opción")
        .custom(async (value) => {
            const database = await databasesService.getDatabaseById(value)
            if (!database) {
                return Promise.reject(
                    "la base de dato ó el framework  no esta incluido"
                );
            }
        }),
    body("*.databases.[*].level")
        .isInt({ min: 1, max: 5 })
        .withMessage("Debe elegir un nivel"),
    body("*.dev_languages.[*].devLanguage_id")
        .exists()
        .notEmpty()
        .withMessage("Debe elegir al menos una opción")
        .custom(async (value) => {
            const language = devLanguagesService.getDevLanguageById(value)
            if (!language) {
                return Promise.reject("El lenguaje de desarrollo no esta incluido");
            }
        }),
    body("*.dev_languages.[*].level")
        .isInt({ min: 1, max: 5 })
        .withMessage("Debe elegir un nivel"),
    body("*.dev_tools.[*].tool_id")
        .exists()
        .notEmpty()
        .withMessage("Debe elegir al menos una opción")
        .custom(async (value) => {
            const tool = await toolService.getToolById(value)
            if (!tool) {
                return Promise.reject(
                    "La herramienta de desarrollo no esta incluida"
                );
            }
        }),
    body("*.educational_experience.[*].name")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar nombre del título"),
    body("*.educational_experience.[*].institute_name")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar el nombre de la institución"),
    body("*.educational_experience.[*].type")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar el tipo de institución"),
    body("*.educational_experience.[*].area")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar e área de la carrera"),
    body("*.educational_experience.[*].graduation_year")
        .exists()
        .notEmpty()
        .withMessage("Debe ingresar el año de la graduación"),
    body("*.soft_skills.[*].softSkill_id")
        .exists()
        .notEmpty()
        .withMessage("Debe elegir al menos una opción")
        .custom(async (value) => {
            const software = await softSkillService.getSoftSkillById(value)
            if (!software) {
                return Promise.reject("El software de desarrollo no esta incluido");
            }

        }),
];
const validateParamsById = [
    param("user_id")
        .isInt()
        .withMessage("Debe ingresar un Numero entero")
        .custom(async (value) => {
            const user = await userService.getUserById({ id: value });
            if (!user) {
                return Promise.reject("El usuario no existe");
            }
        }),
];

module.exports = { validateFieldsWorkProfile, validateParamsById };
