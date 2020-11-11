// TODO use schemata :)
/**
 * Description of data expected for notarised documents
 */
export interface Notarise {
  notarisationMetadata: NotarisationMetadata;
}

export interface NotarisationMetadata {
  /**
   * Date and time at which the notarisation happened
   */
  notarisedOn: string;
  /**
   * Passport number of the recipient
   */
  passportNumber: string;
  /**
   * Unique reference of the notarisation
   */
  reference: string;
}

export interface HealthCert {
  /**
   * A container for a collection of resources.
   */
  fhirBundle: FhirBundle;
  fhirVersion: string;
  id: string;
  /**
   * base64 encoded image
   */
  logo?: string;
  name: string;
  /**
   * Date from which the document is considered valid
   */
  validFrom: string;
}

/**
 * A container for a collection of resources.
 */
export interface FhirBundle {
  /**
   * An entry in a bundle resource - will contain information about Patient, Speciment,
   * Observation or Organization.
   */
  entry: Patient[];
  /**
   * This is a Bundle resource
   */
  resourceType: ResourceType;
  /**
   * Indicates the purpose of this bundle - how it is intended to be used.
   */
  type: FhirBundleType;
}

/**
 * Demographics and other administrative information about an individual or animal receiving
 * care or other health-related services.
 *
 * A sample to be used for analysis.
 *
 * Measurements and simple assertions made about a patient, device or other subject.
 *
 * A formally or informally recognized grouping of people or organizations formed for the
 * purpose of achieving some form of collective action.  Includes companies, institutions,
 * corporations, departments, community groups, healthcare practice groups, payer/insurer,
 * etc.
 */
export interface Patient {
  /**
   * The date of birth for the individual.
   */
  birthDate?: string;
  extension?: Extension[];
  /**
   * Administrative Gender - the gender that the patient is considered to have for
   * administration and record keeping purposes.
   */
  gender?: Gender;
  /**
   * An identifier for this patient.
   *
   * A unique identifier assigned to this observation.
   */
  identifier?: Identifier[];
  /**
   * A name associated with the individual.
   *
   * A name associated with the organization.
   */
  name?: NameName[] | string;
  resourceType: string;
  /**
   * Details concerning the specimen collection.
   */
  collection?: Collection;
  /**
   * The kind of material that forms the specimen.
   *
   * The kind(s) of organization that this is.
   */
  type?: CodeableConcept | string;
  /**
   * Describes what was observed. Sometimes this is called the observation "name".
   */
  code?: CodeableConcept;
  /**
   * The time or time-period the observed value is asserted as being true. For biological
   * subjects - e.g. human patients - this is usually called the "physiologically relevant
   * time". This is usually either the time of the procedure or of specimen collection, but
   * very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveDateTime?: string;
  /**
   * Who was responsible for asserting the observed value as "true".
   */
  performer?: Performer;
  qualification?: Qualification[];
  /**
   * The status of the result value.
   */
  status?: Status;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueCodeableConcept?: CodeableConcept;
  /**
   * Contact for the organization for a certain purpose.
   */
  contact?: Contact;
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: Endpoint;
}

/**
 * The kind of material that forms the specimen.
 *
 * A concept that may be defined by a formal reference to a terminology or ontology or may
 * be provided by text.
 *
 * Describes what was observed. Sometimes this is called the observation "name".
 *
 * The information determined as a result of making the observation, if the information has
 * a simple value.
 */
export interface CodeableConcept {
  /**
   * A reference to a code defined by a terminology system.
   */
  coding: Coding[];
}

export interface Coding {
  code: string;
  /**
   * A representation of the meaning of the code in the system, following the rules of the
   * system.
   */
  display: string;
  /**
   * The identification of the code system that defines the meaning of the symbol in the code.
   */
  system: string;
}

/**
 * Details concerning the specimen collection.
 */
export interface Collection {
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime: string;
}

/**
 * Contact for the organization for a certain purpose.
 */
export interface Contact {
  /**
   * Visiting or postal addresses for the contact.
   */
  address: Address;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be
   * contacted.
   */
  telecom: Telecom[];
}

/**
 * Visiting or postal addresses for the contact.
 */
export interface Address {
  /**
   * Specifies the entire address as it should be displayed e.g. on a postal label. This may
   * be provided instead of or as well as the specific parts.
   */
  text: string;
  /**
   * Distinguishes between physical addresses (those you can visit) and mailing addresses
   * (e.g. PO Boxes and care-of addresses). Most addresses are both.
   */
  type: AddressType;
  /**
   * The purpose of this address.
   */
  use: Use;
}

/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses
 * (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
export enum AddressType {
  Both = "both",
  Physical = "physical",
  Postal = "postal"
}

/**
 * The purpose of this address.
 */
export enum Use {
  Billing = "billing",
  Home = "home",
  Old = "old",
  Temp = "temp",
  Work = "work"
}

export interface Telecom {
  /**
   * Telecommunications form for contact point - what communications system is required to
   * make use of the contact.
   */
  system: System;
  /**
   * The actual contact point details, in a form that is meaningful to the designated
   * communication system (i.e. phone number or email address).
   */
  value: string;
}

/**
 * Telecommunications form for contact point - what communications system is required to
 * make use of the contact.
 */
export enum System {
  Email = "email",
  Fax = "fax",
  Other = "other",
  Pager = "pager",
  Phone = "phone",
  SMS = "sms",
  URL = "url"
}

/**
 * Technical endpoints providing access to services operated for the organization.
 */
export interface Endpoint {
  address: string;
}

export interface Extension {
  code: Code;
  url: string;
}

export interface Code {
  text: string;
}

/**
 * Administrative Gender - the gender that the patient is considered to have for
 * administration and record keeping purposes.
 */
export enum Gender {
  Female = "female",
  Male = "male"
}

export interface Identifier {
  type: TypeObject | string;
  /**
   * lab ascension number
   */
  value: string;
}

export interface TypeObject {
  text: string;
}

export interface NameName {
  /**
   * Specifies the entire name as it should be displayed e.g. on an application UI. This may
   * be provided instead of or as well as the specific parts.
   */
  text: string;
}

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface Performer {
  name: PerformerName[];
}

export interface PerformerName {
  /**
   * Specifies the entire name as it should be displayed e.g. on an application UI. This may
   * be provided instead of or as well as the specific parts.
   */
  text: string;
}

export interface Qualification {
  identifier: string;
  issuer: string;
}

/**
 * The status of the result value.
 */
export enum Status {
  Amended = "amended",
  Cancelled = "cancelled",
  Corrected = "corrected",
  EnteredInError = "entered-in-error",
  Final = "final",
  Preliminary = "preliminary",
  Registered = "registered",
  Unknown = "unknown"
}

/**
 * This is a Bundle resource
 */
export enum ResourceType {
  Bundle = "Bundle"
}

/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
export enum FhirBundleType {
  Collection = "collection"
}
