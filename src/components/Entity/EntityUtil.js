import FileUploaderUtil from "../File/FileUploaderUtil";
import _ from "lodash";

export const Group = { TYPE: "Type", CATEGORY: "Category" };

export const Entities = {
  ADDRESS: { label: "ADDRESS" },
  DATE: { label: "DATES" },
  DX_NAME: { label: "DIAGNOSES" },
  GENERIC_NAME: { label: "MEDICATIONS" },
  ID: { label: "IDs" },
  NAME: { label: "NAMES" },
  SYSTEM_ORGAN_SITE: { label: "ORGAN SITES" },
  TEST_NAME: { label: "TESTS" },
  URL: { label: "URLs" },
  TIME_TO_MEDICATION_NAME: { label: "MEDICATION REVIEW" },
  PROCEDURE_NAME: { label: "PROCEDURES" },
};

export const Attributes = {
  SYSTEM_ORGAN_SITE: { id: "site", label: "Site" },
  DOSAGE: { id: "dosage", label: "Dosage" },
  FREQUENCY: { id: "frequency", label: "Frequency" },
  GENERIC_NAME: { id: "medication", label: "Medication" },
  ROUTE_OR_MODE: { id: "routemode", label: "Route/Mode" },
  TEST_VALUE: { id: "testvalue", label: "Value" },
  TEST_UNIT: { id: "testunit", label: "Units" },
};

export const Trait = {
  DUMMY: { id: "site", label: "Site" },
};

export const retrieveAttribute = (key) => {
  return (
    Attributes[key] || { id: -1, label: `Attribute key not yet mapped ${key}` }
  );
};

// This method isn't actually used yet although it may come in handy
export const retrieveTrait = (key) => {
  return Trait[key] || { id: -1, label: `Trait key not yet mapped ${key}` };
};

export const retrieveEntities = (
  imageFiles,
  callback,
  reference = Group.TYPE
) => {
  imageFiles.forEach((file) => {
    FileUploaderUtil(file, file, (result) => {
      callback(groupEntitiesBy(JSON.parse(result).Entities, reference));
    });
  });
};

export const groupEntitiesBy = (entities, reference = Group.TYPE) => {
  console.log(_.groupBy(entities, reference));
  return _.groupBy(entities, reference);
};

export const buildTitleString = (entity) => {
  var traits = "(";
  if (entity != null && entity.Traits != null) {
    entity.Traits.map((trait, attIndex) => {
      if (trait.Name !== "DIAGNOSIS") {
        traits += trait.Name.toLowerCase();
      }
    });
    traits += ")";
    if (traits.length < 3) {
      traits = "";
    }
  }
  return entity.Text + " " + traits;
};
