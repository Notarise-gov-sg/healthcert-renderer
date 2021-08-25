/**
 * TODO: This is a temporary file.
 * Please import directly from oa-schemata after the repo has been published.
 */

export interface PDTHealthCertV2 {
  /**
   * FHIR bundle for a collection of resources. Each resource and the entire bundle should be
   * compliant against the base spec of FHIR. You may use a validator like:
   * https://inferno.healthit.gov/validator/
   */
  fhirBundle: any[] | boolean | BundleClass | number | number | null | string;
  fhirVersion: string;
  id: string;
  /**
   * base64 encoded image
   */
  logo?: string;
  type: PDTHealthCertV2Type;
  /**
   * Date and time from which the document is considered valid
   */
  validFrom: string;
  version: Version;
}

export interface BundleClass {
  /**
   * An entry in a bundle resource - will either contain a resource or information about a
   * resource (transactions and history only).
   */
  entry?: Array<any[] | boolean | BundleEntryClass | number | number | null | string>;
  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this
   * value never changes.
   */
  id?: string;
  /**
   * A persistent identifier for the bundle that won't change as a bundle is copied from
   * server to server.
   */
  identifier?: any[] | boolean | IdentifierClass | number | number | null | string;
  /**
   * A reference to a set of rules that were followed when the resource was constructed, and
   * which must be understood when processing the content. Often, this is a reference to an
   * implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;
  /**
   * The base language in which the resource is written.
   */
  language?: string;
  /**
   * A series of links that provide context to this bundle.
   */
  link?: Array<any[] | boolean | BundleLinkClass | number | number | null | string>;
  /**
   * The metadata about the resource. This is content that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version
   * changes to the resource.
   */
  meta?: any[] | boolean | MetaClass | number | number | null | string;
  /**
   * This is a Bundle resource
   */
  resourceType: any;
  /**
   * Digital Signature - base64 encoded. XML-DSig or a JWT.
   */
  signature?: any[] | boolean | SignatureClass | number | number | null | string;
  /**
   * The date/time that the bundle was assembled - i.e. when the resources were placed in the
   * bundle.
   */
  timestamp?: string;
  /**
   * If a set of search matches, this is the total number of entries of type 'match' across
   * all pages in the search.  It does not include search.mode = 'include' or 'outcome'
   * entries and it does not provide a count of the number of entries in the Bundle.
   */
  total?: number;
  /**
   * Indicates the purpose of this bundle - how it is intended to be used.
   */
  type?: BundleType;
}

export interface BundleResponseClass {
  /**
   * The Etag for the resource, if the operation for the entry produced a versioned resource
   * (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource
   * Contention](http.html#concurrency)).
   */
  etag?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The date/time that the resource was modified on the server.
   */
  lastModified?: string;
  /**
   * The location header created by processing this operation, populated if the operation
   * returns a location.
   */
  location?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * An OperationOutcome containing hints and warnings produced as part of processing this
   * entry in a batch or transaction.
   */
  outcome?: any[] | boolean | ResourceListClass | number | null | string;
  /**
   * The status code returned by processing this entry. The status SHALL start with a 3 digit
   * HTTP code (e.g. 404) and may contain the standard HTTP description associated with the
   * status code.
   */
  status?: string;
}

export interface ResourceListClass {
  /**
   * An entry in a bundle resource - will either contain a resource or information about a
   * resource (transactions and history only).
   */
  entry?: Array<any[] | boolean | BundleEntryClass | number | number | null | string>;
  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this
   * value never changes.
   */
  id?: string;
  /**
   * A persistent identifier for the bundle that won't change as a bundle is copied from
   * server to server.
   *
   * Unique instance identifiers assigned to a device by manufacturers other organizations or
   * owners.
   *
   * A unique identifier assigned to this observation.
   *
   * Identifier for the organization that is used to identify the organization across multiple
   * disparate systems.
   *
   * An identifier for this patient.
   *
   * An identifier that applies to this person in this role.
   *
   * Id for specimen.
   */
  identifier?: any[] | boolean | IdentifierClass | number | null | string;
  /**
   * A reference to a set of rules that were followed when the resource was constructed, and
   * which must be understood when processing the content. Often, this is a reference to an
   * implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;
  /**
   * The base language in which the resource is written.
   */
  language?: string;
  /**
   * A series of links that provide context to this bundle.
   *
   * Link to another patient resource that concerns the same actual patient.
   */
  link?: Array<any[] | boolean | LinkClass | number | null | string>;
  /**
   * The metadata about the resource. This is content that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version
   * changes to the resource.
   */
  meta?: any[] | boolean | MetaClass | number | number | null | string;
  /**
   * This is a Bundle resource
   *
   * This is a Device resource
   *
   * This is a Observation resource
   *
   * This is a Organization resource
   *
   * This is a Patient resource
   *
   * This is a Practitioner resource
   *
   * This is a Specimen resource
   */
  resourceType: any;
  /**
   * Digital Signature - base64 encoded. XML-DSig or a JWT.
   */
  signature?: any[] | boolean | SignatureClass | number | number | null | string;
  /**
   * The date/time that the bundle was assembled - i.e. when the resources were placed in the
   * bundle.
   */
  timestamp?: string;
  /**
   * If a set of search matches, this is the total number of entries of type 'match' across
   * all pages in the search.  It does not include search.mode = 'include' or 'outcome'
   * entries and it does not provide a count of the number of entries in the Bundle.
   */
  total?: number;
  /**
   * Indicates the purpose of this bundle - how it is intended to be used.
   *
   * The kind or type of device.
   *
   * The kind(s) of organization that this is.
   *
   * The kind of material that forms the specimen.
   */
  type?: any[] | boolean | CodeableConceptClass | number | null | string;
  /**
   * Contact details for an organization or a particular human that is responsible for the
   * device.
   *
   * Contact for the organization for a certain purpose.
   *
   * A contact party (e.g. guardian, partner, friend) for the patient.
   */
  contact?: Array<any[] | boolean | ContactClass | number | null | string>;
  /**
   * These resources do not have an independent existence apart from the resource that
   * contains them - they cannot be identified independently, and nor can they have their own
   * independent transaction scope.
   */
  contained?: Array<any[] | boolean | ResourceListClass | number | null | string>;
  /**
   * The reference to the definition for the device.
   */
  definition?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a
   * UDI label, or by a person describing the Device.  This typically would be used when a
   * person provides the name(s) or when the device represents one of the names available from
   * DeviceDefinition.
   */
  deviceName?: Array<any[] | boolean | DeviceDeviceNameClass | number | number | null | string>;
  /**
   * The distinct identification string as required by regulation for a human cell, tissue, or
   * cellular and tissue-based product.
   */
  distinctIdentifier?: string;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if
   * applicable).
   */
  expirationDate?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the resource. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The place where the device can be found.
   */
  location?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string;
  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: string;
  /**
   * The model number for the device.
   */
  modelNumber?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the resource and that modifies the understanding of the element that contains it
   * and/or the understanding of the containing element's descendants. Usually modifier
   * elements provide negation or qualification. To make the use of extensions safe and
   * manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer is allowed to define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Descriptive information, usage information or implantation information that is not
   * captured in an existing element.
   *
   * Comments about the observation or the results.
   *
   * To communicate any details or issues about the specimen or during the specimen
   * collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: Array<any[] | boolean | AnnotationClass | number | number | null | string>;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the
   * device.
   */
  owner?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The parent device.
   *
   * Reference to the parent (source) specimen which is used when the specimen was either
   * derived from or a component of another specimen.
   */
  parent?: any[] | boolean | ReferenceClass | number | null | string;
  /**
   * The part number of the device.
   */
  partNumber?: string;
  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation
   * status, time properties.
   */
  property?: Array<any[] | boolean | DevicePropertyClass | number | number | null | string>;
  /**
   * Provides additional safety characteristics about a medical device.  For example devices
   * containing latex.
   */
  safety?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * The serial number assigned by the organization when the device was manufactured.
   */
  serialNumber?: string;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a
   * particular purpose, and used for the communication.
   */
  specialization?: Array<any[] | boolean | DeviceSpecializationClass | number | number | null | string>;
  /**
   * Status of the Device availability.
   *
   * The status of the result value.
   *
   * The availability of the specimen.
   */
  status?: ResourceListStatus;
  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * A human-readable narrative that contains a summary of the resource and can be used to
   * represent the content of the resource to a human. The narrative need not encode all the
   * structured data, but is required to contain sufficient detail to make it "clinically
   * safe" for a human to just read the narrative. Resource definitions may define what
   * content should be represented in the narrative to ensure clinical safety.
   */
  text?: any[] | boolean | NarrativeClass | number | number | null | string;
  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device
   * may include multiple udiCarriers as it either may include just the udiCarrier for the
   * jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiCarrier?: Array<any[] | boolean | DeviceUdiCarrierClass | number | number | null | string>;
  /**
   * A network address on which the device may be contacted directly.
   */
  url?: string;
  /**
   * The actual design of the device or software version running on the device.
   */
  version?: Array<any[] | boolean | DeviceVersionClass | number | number | null | string>;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.  For
   * example, a MedicationRequest may require a patient to have laboratory test performed
   * before  it is dispensed.
   */
  basedOn?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * Indicates the site on the subject's body where the observation was made (i.e. the target
   * site).
   */
  bodySite?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * A code that classifies the general type of observation being made.
   */
  category?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * Describes what was observed. Sometimes this is called the observation "name".
   */
  code?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Some observations have multiple component observations.  These component observations are
   * expressed as separate code value pairs that share the same attributes.  Examples include
   * systolic and diastolic component observations for blood pressure measurement and multiple
   * component observations for genetics observations.
   */
  component?: Array<any[] | boolean | ObservationComponentClass | number | number | null | string>;
  /**
   * Provides a reason why the expected value in the element Observation.value[x] is missing.
   */
  dataAbsentReason?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The target resource that represents a measurement from which this observation value is
   * derived. For example, a calculated anion gap or a fetal measurement based on an
   * ultrasound image.
   */
  derivedFrom?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * The device used to generate the observation data.
   */
  device?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The time or time-period the observed value is asserted as being true. For biological
   * subjects - e.g. human patients - this is usually called the "physiologically relevant
   * time". This is usually either the time of the procedure or of specimen collection, but
   * very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveDateTime?: string;
  /**
   * The time or time-period the observed value is asserted as being true. For biological
   * subjects - e.g. human patients - this is usually called the "physiologically relevant
   * time". This is usually either the time of the procedure or of specimen collection, but
   * very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveInstant?: string;
  /**
   * The time or time-period the observed value is asserted as being true. For biological
   * subjects - e.g. human patients - this is usually called the "physiologically relevant
   * time". This is usually either the time of the procedure or of specimen collection, but
   * very often the source of the date/time is not known, only the date/time itself.
   */
  effectivePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * The time or time-period the observed value is asserted as being true. For biological
   * subjects - e.g. human patients - this is usually called the "physiologically relevant
   * time". This is usually either the time of the procedure or of specimen collection, but
   * very often the source of the date/time is not known, only the date/time itself.
   */
  effectiveTiming?: any[] | boolean | TimingClass | number | number | null | string;
  /**
   * The healthcare event  (e.g. a patient and healthcare provider interaction) during which
   * this observation is made.
   */
  encounter?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The actual focus of an observation when it is not the patient of record representing
   * something or someone associated with the patient such as a spouse, parent, fetus, or
   * donor. For example, fetus observations in a mother's record.  The focus of an observation
   * could also be an existing condition,  an intervention, the subject's diet,  another
   * observation of the subject,  or a body structure such as tumor or implanted device.   An
   * example use case would be using the Observation resource to capture whether the mother is
   * trained to change her child's tracheostomy tube. In this example, the child is the
   * patient of record and the mother is the focus.
   */
  focus?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * This observation is a group observation (e.g. a battery, a panel of tests, a set of vital
   * sign measurements) that includes the target as a member of the group.
   */
  hasMember?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * A categorical assessment of an observation value.  For example, high, low, normal.
   */
  interpretation?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * The date and time this version of the observation was made available to providers,
   * typically after the results have been reviewed and verified.
   */
  issued?: string;
  /**
   * Indicates the mechanism used to perform the observation.
   */
  method?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * A larger event of which this particular Observation is a component or step.  For
   * example,  an observation as part of a procedure.
   *
   * The organization of which this organization forms a part.
   */
  partOf?: any[] | boolean | ReferenceClass | number | null | string;
  /**
   * Who was responsible for asserting the observed value as "true".
   */
  performer?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * Guidance on how to interpret the value by comparison to a normal or recommended range.
   * Multiple reference ranges are interpreted as an "OR".   In other words, to represent two
   * distinct target populations, two `referenceRange` elements would be used.
   */
  referenceRange?: Array<any[] | boolean | ObservationReferenceRangeClass | number | number | null | string>;
  /**
   * The specimen that was used when this observation was made.
   */
  specimen?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The patient, or group of patients, location, or device this observation is about and into
   * whose record the observation is placed. If the actual focus of the observation is
   * different from the subject (or a sample of, part, or region of the subject), the `focus`
   * element or the `code` itself specifies the actual focus of the observation.
   *
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the
   * source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueBoolean?: boolean;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueDateTime?: string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueInteger?: number;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valuePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueRatio?: any[] | boolean | RatioClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueSampledData?: any[] | boolean | SampledDataClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueString?: string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueTime?: string;
  /**
   * Whether the organization's record is still in active use.
   *
   * Whether this patient record is in active use.
   * Many systems use this property to mark as non-current patients, such as those that have
   * not been seen for a period of time based on an organization's business rules.
   *
   * It is often used to filter patient lists to exclude inactive patients
   *
   * Deceased patients may also be marked as inactive for the same reasons, but may be active
   * for some time after death.
   *
   * Whether this practitioner's record is in active use.
   */
  active?: boolean;
  /**
   * An address for the organization.
   *
   * An address for the individual.
   *
   * Address(es) of the practitioner that are not role specific (typically home address).
   * Work addresses are not typically entered in this property as they are usually role
   * dependent.
   */
  address?: Array<any[] | boolean | AddressClass | number | number | null | string>;
  /**
   * A list of alternate names that the organization is known as, or was known as in the past.
   */
  alias?: string[];
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * A name associated with the organization.
   *
   * A name associated with the individual.
   *
   * The name(s) associated with the practitioner.
   */
  name?: Array<any[] | boolean | HumanNameClass | number | number | null | string> | string;
  /**
   * A contact detail for the organization.
   *
   * A contact detail (e.g. a telephone number or an email address) by which the individual
   * may be contacted.
   *
   * A contact detail for the practitioner, e.g. a telephone number or an email address.
   */
  telecom?: Array<any[] | boolean | ContactPointClass | number | number | null | string>;
  /**
   * The date of birth for the individual.
   *
   * The date of birth for the practitioner.
   */
  birthDate?: string;
  /**
   * A language which may be used to communicate with the patient about his or her health.
   *
   * A language the practitioner can use in patient communication.
   */
  communication?: Array<any[] | boolean | CommunicationClass | number | null | string>;
  /**
   * Indicates if the individual is deceased or not.
   */
  deceasedBoolean?: boolean;
  /**
   * Indicates if the individual is deceased or not.
   */
  deceasedDateTime?: string;
  /**
   * Administrative Gender - the gender that the patient is considered to have for
   * administration and record keeping purposes.
   *
   * Administrative Gender - the gender that the person is considered to have for
   * administration and record keeping purposes.
   */
  gender?: Gender;
  /**
   * Patient's nominated care provider.
   */
  generalPractitioner?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * Organization that is the custodian of the patient record.
   */
  managingOrganization?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Indicates whether the patient is part of a multiple (boolean) or indicates the actual
   * birth order (integer).
   */
  multipleBirthBoolean?: boolean;
  /**
   * Indicates whether the patient is part of a multiple (boolean) or indicates the actual
   * birth order (integer).
   */
  multipleBirthInteger?: number;
  /**
   * Image of the patient.
   *
   * Image of the person.
   */
  photo?: Array<any[] | boolean | AttachmentClass | number | number | null | string>;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain
   * to the provision of care by the practitioner.  For example, a medical license issued by a
   * medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: Array<any[] | boolean | PractitionerQualificationClass | number | number | null | string>;
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily
   * the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: any[] | boolean | IdentifierClass | number | number | null | string;
  /**
   * Details concerning the specimen collection.
   */
  collection?: any[] | boolean | SpecimenCollectionClass | number | number | null | string;
  /**
   * A mode or state of being that describes the nature of the specimen.
   */
  condition?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in
   * tube in tray in rack is not addressed here.
   */
  container?: Array<any[] | boolean | SpecimenContainerClass | number | number | null | string>;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: Array<any[] | boolean | SpecimenProcessingClass | number | number | null | string>;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: string;
  /**
   * Details concerning a service request that required a specimen to be collected.
   */
  request?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
}

export interface BundleEntryClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the
   * resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent
   * URL consistent with the Resource.id. The fullUrl is a version independent reference to
   * the resource. The fullUrl element SHALL have a value except that:
   * * fullUrl can be empty on a POST (although it does not need to when specifying a
   * temporary id for reference in the bundle)
   * * Results from operations might involve resources that are not identified.
   */
  fullUrl?: string;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A series of links that provide context to this entry.
   */
  link?: Array<any[] | boolean | BundleLinkClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Additional information about how this entry should be processed as part of a transaction
   * or batch.  For history, it shows how the entry was processed to create the version
   * contained in the entry.
   */
  request?: any[] | boolean | BundleRequestClass | number | number | null | string;
  /**
   * The Resource for the entry. The purpose/meaning of the resource is determined by the
   * Bundle.type.
   */
  resource?: any[] | boolean | ResourceListClass | number | null | string;
  /**
   * Indicates the results of processing the corresponding 'request' entry in the batch or
   * transaction being responded to or what the results of an operation where when returning
   * history.
   */
  response?: any[] | boolean | BundleResponseClass | number | number | null | string;
  /**
   * Information about the search process that lead to the creation of this entry.
   */
  search?: any[] | boolean | BundleSearchClass | number | number | null | string;
}

export interface UsageContextClass {
  /**
   * A code that identifies the type of context being specified by this usage context.
   */
  code: any[] | boolean | CodingClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A value that defines the context specified in this context of use. The interpretation of
   * the value is defined by the code.
   */
  valueCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * A value that defines the context specified in this context of use. The interpretation of
   * the value is defined by the code.
   */
  valueQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * A value that defines the context specified in this context of use. The interpretation of
   * the value is defined by the code.
   */
  valueRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * A value that defines the context specified in this context of use. The interpretation of
   * the value is defined by the code.
   */
  valueReference?: any[] | boolean | ReferenceClass | number | number | null | string;
}

export interface TriggerDefinitionClass {
  /**
   * A boolean-valued expression that is evaluated in the context of the container of the
   * trigger definition and returns whether or not the trigger fires.
   */
  condition?: any[] | boolean | ExpressionClass | number | number | null | string;
  /**
   * The triggering data of the event (if this is a data trigger). If more than one data is
   * requirement is specified, then all the data requirements must be true.
   */
  data?: Array<any[] | boolean | DataRequirementClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A formal name for the event. This may be an absolute URI that identifies the event
   * formally (e.g. from a trigger registry), or a simple relative URI that identifies the
   * event in a local context.
   */
  name?: string;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDate?: string;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDateTime?: string;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingReference?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingTiming?: any[] | boolean | TimingClass | number | number | null | string;
  /**
   * The type of triggering event.
   */
  type?: TriggerDefinitionType;
}

export interface SignatureClass {
  /**
   * The base64 encoding of the Signature content. When signature is not recorded
   * electronically this element would be empty.
   */
  data?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A reference to an application-usable description of the identity that is represented by
   * the signature.
   */
  onBehalfOf?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * A mime type that indicates the technical format of the signature. Important mime types
   * are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for
   * a graphical image of a signature, etc.
   */
  sigFormat?: string;
  /**
   * A mime type that indicates the technical format of the target resources signed by the
   * signature.
   */
  targetFormat?: string;
  /**
   * An indication of the reason that the entity signed this document. This may be explicitly
   * included as part of the signature information and can be used when determining
   * accountability for various actions concerning the document.
   */
  type: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * When the digital signature was signed.
   */
  when?: string;
  /**
   * A reference to an application-usable description of the identity that signed  (e.g. the
   * signature used their private key).
   */
  who: any[] | boolean | ReferenceClass | number | number | null | string;
}

export interface SampledDataClass {
  /**
   * A series of data points which are decimal values separated by a single space (character
   * u20). The special values "E" (error), "L" (below detection limit) and "U" (above
   * detection limit) can also be used in place of a decimal value.
   */
  data?: string;
  /**
   * The number of sample points at each time point. If this value is greater than one, then
   * the dimensions will be interlaced - all the sample points for a point in time will be
   * recorded at once.
   */
  dimensions?: number;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A correction factor that is applied to the sampled data points before they are added to
   * the origin.
   */
  factor?: number;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The lower limit of detection of the measured points. This is needed if any of the data
   * points have the value "L" (lower than detection limit).
   */
  lowerLimit?: number;
  /**
   * The base quantity that a measured value of zero represents. In addition, this provides
   * the units of the entire measurement series.
   */
  origin: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * The length of time between sampling times, measured in milliseconds.
   */
  period?: number;
  /**
   * The upper limit of detection of the measured points. This is needed if any of the data
   * points have the value "U" (higher than detection limit).
   */
  upperLimit?: number;
}

export interface RelatedArtifactClass {
  /**
   * A bibliographic citation for the related artifact. This text SHOULD be formatted
   * according to an accepted citation format.
   */
  citation?: string;
  /**
   * A brief description of the document or knowledge resource being referenced, suitable for
   * display to a consumer.
   */
  display?: string;
  /**
   * The document being referenced, represented as an attachment. This is exclusive with the
   * resource element.
   */
  document?: any[] | boolean | AttachmentClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A short label that can be used to reference the citation from elsewhere in the containing
   * artifact, such as a footnote index.
   */
  label?: string;
  /**
   * The related resource, such as a library, value set, profile, or other knowledge resource.
   */
  resource?: string;
  /**
   * The type of relationship to the related artifact.
   */
  type?: RelatedArtifactType;
  /**
   * A url for the artifact that can be followed to access the actual content.
   */
  url?: string;
}

export interface ParameterDefinitionClass {
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  documentation?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The maximum number of times this element is permitted to appear in the request or
   * response.
   */
  max?: string;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min?: number;
  /**
   * The name of the parameter used to allow access to the value of the parameter in
   * evaluation contexts.
   */
  name?: string;
  /**
   * If specified, this indicates a profile that the input data must conform to, or that the
   * output data will conform to.
   */
  profile?: string;
  /**
   * The type of the parameter.
   */
  type?: string;
  /**
   * Whether the parameter is input or output for the module.
   */
  use?: string;
}

export interface MoneyClass {
  /**
   * ISO 4217 Currency Code.
   */
  currency?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Numerical value (with implicit precision).
   */
  value?: number;
}

export interface MetaClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * When the resource last changed - e.g. when the version changed.
   */
  lastUpdated?: string;
  /**
   * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource
   * claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
   */
  profile?: string[];
  /**
   * Security labels applied to this resource. These tags connect specific resources to the
   * overall security policy and infrastructure.
   */
  security?: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * A uri that identifies the source system of the resource. This provides a minimal amount
   * of [[[Provenance]]] information that can be used to track or differentiate the source of
   * information in the resource. The source may identify another FHIR server, document,
   * message, database, etc.
   */
  source?: string;
  /**
   * Tags applied to this resource. Tags are intended to be used to identify and relate
   * resources to process and workflow, and applications are not required to consider the tags
   * when interpreting the meaning of a resource.
   */
  tag?: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * The version specific identifier, as it appears in the version portion of the URL. This
   * value changes when the resource is created, updated, or deleted.
   */
  versionId?: string;
}

export interface HumanNameClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the
   * family name of a son is the first name of his father.
   */
  family?: string;
  /**
   * Given name.
   */
  given?: string[];
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or
   * nobility status, etc. and that appears at the start of the name.
   */
  prefix?: string[];
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or
   * nobility status, etc. and that appears at the end of the name.
   */
  suffix?: string[];
  /**
   * Specifies the entire name as it should be displayed e.g. on an application UI. This may
   * be provided instead of or as well as the specific parts.
   */
  text?: string;
  /**
   * Identifies the purpose for this name.
   */
  use?: HumanNameUse;
}

export interface ExpressionClass {
  /**
   * A brief, natural language description of the condition that effectively communicates the
   * intended semantics.
   */
  description?: string;
  /**
   * An expression in the specified language that returns a value.
   */
  expression?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The media type of the language for the expression.
   */
  language?: Language;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in
   * the context where it is defined.
   */
  name?: string;
  /**
   * A URI that defines where the expression is found.
   */
  reference?: string;
}

export interface TimingRepeatClass {
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or
   * outer bounds for start and/or end limits of the timing schedule.
   */
  boundsDuration?: any[] | boolean | DurationClass | number | number | null | string;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or
   * outer bounds for start and/or end limits of the timing schedule.
   */
  boundsPeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Either a duration for the length of the timing schedule, a range of possible length, or
   * outer bounds for start and/or end limits of the timing schedule.
   */
  boundsRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * A total count of the desired number of repetitions across the duration of the entire
   * timing specification. If countMax is present, this element indicates the lower bound of
   * the allowed range of count values.
   */
  count?: number;
  /**
   * If present, indicates that the count is a range - so to perform the action between
   * [count] and [countMax] times.
   */
  countMax?: number;
  /**
   * If one or more days of week is provided, then the action happens only on the specified
   * day(s).
   */
  dayOfWeek?: string[];
  /**
   * How long this thing happens for when it happens. If durationMax is present, this element
   * indicates the lower bound of the allowed range of the duration.
   */
  duration?: number;
  /**
   * If present, indicates that the duration is a range - so to perform the action between
   * [duration] and [durationMax] time length.
   */
  durationMax?: number;
  /**
   * The units of time for the duration, in UCUM units.
   */
  durationUnit?: Unit;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The number of times to repeat the action within the specified period. If frequencyMax is
   * present, this element indicates the lower bound of the allowed range of the frequency.
   */
  frequency?: number;
  /**
   * If present, indicates that the frequency is a range - so to repeat between [frequency]
   * and [frequencyMax] times within the period or period range.
   */
  frequencyMax?: number;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The number of minutes from the event. If the event code does not indicate whether the
   * minutes is before or after the event, then the offset is assumed to be after the event.
   */
  offset?: number;
  /**
   * Indicates the duration of time over which repetitions are to occur; e.g. to express "3
   * times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is
   * present, this element indicates the lower bound of the allowed range of the period length.
   */
  period?: number;
  /**
   * If present, indicates that the period is a range from [period] to [periodMax], allowing
   * expressing concepts such as "do this once every 3-5 days.
   */
  periodMax?: number;
  /**
   * The units of time for the period in UCUM units.
   */
  periodUnit?: Unit;
  /**
   * Specified time of day for action to take place.
   */
  timeOfDay?: string[];
  /**
   * An approximate time period during the day, potentially linked to an event of daily living
   * that indicates when the action should occur.
   */
  when?: When[];
}

export interface TimingClass {
  /**
   * A code for the timing schedule (or just text in code.text). Some codes such as BID are
   * ubiquitous, but many institutions define their own additional codes. If a code is
   * provided, the code is understood to be a complete statement of whatever is specified in
   * the structured timing data, and either the code or the data may be used to interpret the
   * Timing, with the exception that .repeat.bounds still applies over the code (and is not
   * contained in the code).
   */
  code?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Identifies specific times when the event occurs.
   */
  event?: string[];
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A set of rules that describe when the event is scheduled.
   */
  repeat?: any[] | boolean | TimingRepeatClass | number | number | null | string;
}

export interface RatioClass {
  /**
   * The value of the denominator.
   */
  denominator?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The value of the numerator.
   */
  numerator?: any[] | boolean | QuantityClass | number | number | null | string;
}

export interface RangeClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The high limit. The boundary is inclusive.
   */
  high?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The low limit. The boundary is inclusive.
   */
  low?: any[] | boolean | QuantityClass | number | number | null | string;
}

export interface QuantityClass {
  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * How the value should be understood and represented - whether the actual value is greater
   * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
   * then the real value is < stated value.
   */
  comparator?: Comparator;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * A human-readable form of the unit.
   */
  unit?: string;
  /**
   * The value of the measured amount. The value includes an implicit precision in the
   * presentation of the value.
   */
  value?: number;
}

export interface DosageDoseAndRateClass {
  /**
   * Amount of medication per dose.
   */
  doseQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Amount of medication per dose.
   */
  doseRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Amount of medication per unit of time.
   */
  rateQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Amount of medication per unit of time.
   */
  rateRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * Amount of medication per unit of time.
   */
  rateRatio?: any[] | boolean | RatioClass | number | number | null | string;
  /**
   * The kind of dose or rate specified, for example, ordered or calculated.
   */
  type?: any[] | boolean | CodeableConceptClass | number | number | null | string;
}

export interface DosageClass {
  /**
   * Supplemental instructions to the patient on how to take the medication  (e.g. "with
   * meals" or"take half to one hour before food") or warnings for the patient about the
   * medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or
   * sunlamps").
   */
  additionalInstruction?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * Indicates whether the Medication is only taken when needed within a specific dosing
   * schedule (Boolean option), or it indicates the precondition for taking the Medication
   * (CodeableConcept).
   */
  asNeededBoolean?: boolean;
  /**
   * Indicates whether the Medication is only taken when needed within a specific dosing
   * schedule (Boolean option), or it indicates the precondition for taking the Medication
   * (CodeableConcept).
   */
  asNeededCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The amount of medication administered.
   */
  doseAndRate?: Array<any[] | boolean | DosageDoseAndRateClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Upper limit on medication per administration.
   */
  maxDosePerAdministration?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Upper limit on medication per lifetime of the patient.
   */
  maxDosePerLifetime?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Upper limit on medication per unit of time.
   */
  maxDosePerPeriod?: any[] | boolean | RatioClass | number | number | null | string;
  /**
   * Technique for administering medication.
   */
  method?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: string;
  /**
   * How drug should enter body.
   */
  route?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  sequence?: number;
  /**
   * Body site to administer to.
   */
  site?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Free text dosage instructions e.g. SIG.
   */
  text?: string;
  /**
   * When medication should be administered.
   */
  timing?: any[] | boolean | TimingClass | number | number | null | string;
}

export interface DistanceClass {
  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * How the value should be understood and represented - whether the actual value is greater
   * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
   * then the real value is < stated value.
   */
  comparator?: Comparator;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * A human-readable form of the unit.
   */
  unit?: string;
  /**
   * The value of the measured amount. The value includes an implicit precision in the
   * presentation of the value.
   */
  value?: number;
}

export interface DataRequirementSortClass {
  /**
   * The direction of the sort, ascending or descending.
   */
  direction?: Direction;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the
   * required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as
   * well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index
   * must be an integer constant.
   */
  path?: string;
}

export interface DurationClass {
  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * How the value should be understood and represented - whether the actual value is greater
   * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
   * then the real value is < stated value.
   */
  comparator?: Comparator;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * A human-readable form of the unit.
   */
  unit?: string;
  /**
   * The value of the measured amount. The value includes an implicit precision in the
   * presentation of the value.
   */
  value?: number;
}

export interface DataRequirementDateFilterClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The date-valued attribute of the filter. The specified path SHALL be a FHIRPath
   * resolveable on the specified type of the DataRequirement, and SHALL consist only of
   * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
   * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
   * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   * Note that the index must be an integer constant. The path must resolve to an element of
   * type date, dateTime, Period, Schedule, or Timing.
   */
  path?: string;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the
   * DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule,
   * or Timing.
   */
  searchParam?: string;
  /**
   * The value of the filter. If period is specified, the filter will return only those data
   * items that fall within the bounds determined by the Period, inclusive of the period
   * boundaries. If dateTime is specified, the filter will return only those data items that
   * are equal to the specified dateTime. If a Duration is specified, the filter will return
   * only those data items that fall within Duration before now.
   */
  valueDateTime?: string;
  /**
   * The value of the filter. If period is specified, the filter will return only those data
   * items that fall within the bounds determined by the Period, inclusive of the period
   * boundaries. If dateTime is specified, the filter will return only those data items that
   * are equal to the specified dateTime. If a Duration is specified, the filter will return
   * only those data items that fall within Duration before now.
   */
  valueDuration?: any[] | boolean | DurationClass | number | number | null | string;
  /**
   * The value of the filter. If period is specified, the filter will return only those data
   * items that fall within the bounds determined by the Period, inclusive of the period
   * boundaries. If dateTime is specified, the filter will return only those data items that
   * are equal to the specified dateTime. If a Duration is specified, the filter will return
   * only those data items that fall within Duration before now.
   */
  valuePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
}

export interface DataRequirementCodeFilterClass {
  /**
   * The codes for the code filter. If values are given, the filter will return only those
   * data items for which the code-valued attribute specified by the path has a value that is
   * one of the specified codes. If codes are specified in addition to a value set, the filter
   * returns items matching a code in the value set or one of the specified codes.
   */
  code?: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The code-valued attribute of the filter. The specified path SHALL be a FHIRPath
   * resolveable on the specified type of the DataRequirement, and SHALL consist only of
   * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
   * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
   * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   * Note that the index must be an integer constant. The path must resolve to an element of
   * type code, Coding, or CodeableConcept.
   */
  path?: string;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the
   * DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: string;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If
   * valueSet is specified, the filter will return only those data items for which the value
   * of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: string;
}

export interface DataRequirementClass {
  /**
   * Code filters specify additional constraints on the data, specifying the value set of
   * interest for a particular element of the data. Each code filter defines an additional
   * constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: Array<any[] | boolean | DataRequirementCodeFilterClass | number | number | null | string>;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date
   * range for specific elements. Each date filter specifies an additional constraint on the
   * data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: Array<any[] | boolean | DataRequirementDateFilterClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Specifies a maximum number of results that are required (uses the _count search
   * parameter).
   */
  limit?: number;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and
   * must be supported by the consumer in order to obtain an effective evaluation. This does
   * not mean that a value is required for this element, only that the consuming system must
   * understand the element and be able to provide values for it if they are available.
   *
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the
   * DataRequirement. The path SHALL consist only of identifiers, constant indexers, and
   * .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: string[];
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: string[];
  /**
   * Specifies the order of the results to be returned.
   */
  sort?: Array<any[] | boolean | DataRequirementSortClass | number | number | null | string>;
  /**
   * The intended subjects of the data requirement. If this element is not provided, a Patient
   * subject is assumed.
   */
  subjectCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The intended subjects of the data requirement. If this element is not provided, a Patient
   * subject is assumed.
   */
  subjectReference?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The type of the required data, specified as the type name of a resource. For profiles,
   * this value is set to the type of the base resource of the profile.
   */
  type?: string;
}

export interface CountClass {
  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * How the value should be understood and represented - whether the actual value is greater
   * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
   * then the real value is < stated value.
   */
  comparator?: Comparator;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * A human-readable form of the unit.
   */
  unit?: string;
  /**
   * The value of the measured amount. The value includes an implicit precision in the
   * presentation of the value.
   */
  value?: number;
}

export interface ContributorClass {
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: Array<any[] | boolean | ContactDetailClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name?: string;
  /**
   * The type of contributor.
   */
  type?: ContributorType;
}

export interface ContactPointClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Time period when the contact point was/is in use.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower
   * rank values are more preferred than those with higher rank values.
   */
  rank?: number;
  /**
   * Telecommunications form for contact point - what communications system is required to
   * make use of the contact.
   */
  system?: System;
  /**
   * Identifies the purpose for the contact point.
   */
  use?: ContactPointUse;
  /**
   * The actual contact point details, in a form that is meaningful to the designated
   * communication system (i.e. phone number or email address).
   */
  value?: string;
}

export interface ContactDetailClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The name of an individual to contact.
   */
  name?: string;
  /**
   * The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: Array<any[] | boolean | ContactPointClass | number | number | null | string>;
}

export interface AttachmentClass {
  /**
   * Identifies the type of the data in the attachment and allows a method to be chosen to
   * interpret or render the data. Includes mime type parameters such as charset where
   * appropriate.
   */
  contentType?: string;
  /**
   * The date that the attachment was first created.
   */
  creation?: string;
  /**
   * The actual data of the attachment - a sequence of bytes, base64 encoded.
   */
  data?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The calculated hash of the data using SHA-1. Represented using base64.
   */
  hash?: string;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The human language of the content. The value can be any valid value according to BCP 47.
   */
  language?: string;
  /**
   * The number of bytes of data that make up this attachment (before base64 encoding, if that
   * is done).
   */
  size?: number;
  /**
   * A label or set of text to display in place of the data.
   */
  title?: string;
  /**
   * A location where the data can be accessed.
   */
  url?: string;
}

export interface CodingClass {
  /**
   * A symbol in syntax defined by the system. The symbol may be a predefined code or an
   * expression in a syntax defined by the coding system (e.g. post-coordination).
   */
  code?: string;
  /**
   * A representation of the meaning of the code in the system, following the rules of the
   * system.
   */
  display?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the code system that defines the meaning of the symbol in the code.
   */
  system?: string;
  /**
   * Indicates that this coding was chosen by a user directly - e.g. off a pick list of
   * available items (codes or displays).
   */
  userSelected?: boolean;
  /**
   * The version of the code system which was used when choosing this code. Note that a
   * well-maintained code system does not need the version reported, because the meaning of
   * codes is consistent across versions. However this cannot consistently be assured, and
   * when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
   */
  version?: string;
}

export interface CodeableConceptClass {
  /**
   * A reference to a code defined by a terminology system.
   */
  coding?: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A human language representation of the concept as seen/selected/uttered by the user who
   * entered the data and/or which represents the intended meaning of the user.
   */
  text?: string;
}

export interface IdentifierClass {
  /**
   * Organization that issued/manages the identifier.
   */
  assigner?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Time period during which identifier is/was valid for use.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Establishes the namespace for the value - that is, a URL that describes a set values that
   * are unique.
   */
  system?: string;
  /**
   * A coded type for the identifier that can be used to determine which identifier to use for
   * a specific purpose.
   */
  type?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The purpose of this identifier.
   */
  use?: IdentifierUse;
  /**
   * The portion of the identifier typically relevant to the user and which is unique within
   * the context of the system.
   */
  value?: string;
}

export interface ReferenceClass {
  /**
   * Plain text narrative that identifies the resource in addition to the resource reference.
   */
  display?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * An identifier for the target resource. This is used when there is no way to reference the
   * other resource directly, either because the entity it represents is not available through
   * a FHIR server, or because there is no way for the author of the resource to convert a
   * known identifier to an actual location. There is no requirement that a
   * Reference.identifier point to something that is actually exposed as a FHIR instance, but
   * it SHALL point to a business concept that would be expected to be exposed as a FHIR
   * instance, and that instance would need to be of a FHIR resource type allowed by the
   * reference.
   */
  identifier?: any[] | boolean | IdentifierClass | number | number | null | string;
  /**
   * A reference to a location at which the other resource is found. The reference may be a
   * relative reference, in which case it is relative to the service base URL, or an absolute
   * URL that resolves to the location where the resource is found. The reference may be
   * version specific or not. If the reference is not to a FHIR RESTful server, then it should
   * be assumed to be version specific. Internal fragment references (start with '#') refer to
   * contained resources.
   */
  reference?: string;
  /**
   * The expected type of the target of the reference. If both Reference.type and
   * Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be
   * consistent.
   *
   * The type is the Canonical URL of Resource Definition that is the type this reference
   * refers to. References are URLs that are relative to
   * http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to
   * http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for
   * logical models (and can only be used in references in logical models, not resources).
   */
  type?: string;
}

export interface AnnotationClass {
  /**
   * The individual responsible for making the annotation.
   */
  authorReference?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The individual responsible for making the annotation.
   */
  authorString?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The text of the annotation in markdown format.
   */
  text?: string;
  /**
   * Indicates when this particular annotation was made.
   */
  time?: string;
}

export interface AgeClass {
  /**
   * A computer processable form of the unit in some unit representation system.
   */
  code?: string;
  /**
   * How the value should be understood and represented - whether the actual value is greater
   * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
   * then the real value is < stated value.
   */
  comparator?: Comparator;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: string;
  /**
   * A human-readable form of the unit.
   */
  unit?: string;
  /**
   * The value of the measured amount. The value includes an implicit precision in the
   * presentation of the value.
   */
  value?: number;
}

export interface PeriodClass {
  /**
   * The end of the period. If the end of the period is missing, it means no end was known or
   * planned at the time the instance was created. The start may be in the past, and the end
   * date in the future, which means that period is expected/planned to end at that time.
   */
  end?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The start of the period. The boundary is inclusive.
   */
  start?: string;
}

export interface AddressClass {
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: string;
  /**
   * Country - a nation as commonly understood or generally accepted.
   */
  country?: string;
  /**
   * The name of the administrative area (county).
   */
  district?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * This component contains the house number, apartment number, street name, street
   * direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: string[];
  /**
   * Time period when address was/is in use.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: string;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code
   * may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: string;
  /**
   * Specifies the entire address as it should be displayed e.g. on a postal label. This may
   * be provided instead of or as well as the specific parts.
   */
  text?: string;
  /**
   * Distinguishes between physical addresses (those you can visit) and mailing addresses
   * (e.g. PO Boxes and care-of addresses). Most addresses are both.
   */
  type?: AddressType;
  /**
   * The purpose of this address.
   */
  use?: AddressUse;
}

export interface ExtensionClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Source of the definition for the extension code - a logical name or a URL.
   */
  url?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: any[] | boolean | AddressClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueAge?: any[] | boolean | AgeClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: any[] | boolean | AnnotationClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: any[] | boolean | AttachmentClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: any[] | boolean | CodingClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: any[] | boolean | ContactDetailClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: any[] | boolean | ContactPointClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: any[] | boolean | ContributorClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueCount?: any[] | boolean | CountClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: any[] | boolean | DataRequirementClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: any[] | boolean | DistanceClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: any[] | boolean | DosageClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: any[] | boolean | DurationClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: any[] | boolean | ExpressionClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: any[] | boolean | HumanNameClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueId?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: any[] | boolean | IdentifierClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueMeta?: any[] | boolean | MetaClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: any[] | boolean | MoneyClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: any[] | boolean | ParameterDefinitionClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: any[] | boolean | RatioClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueReference?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: any[] | boolean | RelatedArtifactClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: any[] | boolean | SampledDataClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: any[] | boolean | SignatureClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueString?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: any[] | boolean | TimingClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: any[] | boolean | TriggerDefinitionClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: any[] | boolean | UsageContextClass | number | number | null | string;
  /**
   * Value of extension - must be one of a constrained set of the data types (see
   * [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string;
}

/**
 * The type of triggering event.
 */
export enum TriggerDefinitionType {
  DataAccessEnded = "data-access-ended",
  DataAccessed = "data-accessed",
  DataAdded = "data-added",
  DataChanged = "data-changed",
  DataModified = "data-modified",
  DataRemoved = "data-removed",
  NamedEvent = "named-event",
  Periodic = "periodic"
}

/**
 * The type of relationship to the related artifact.
 */
export enum RelatedArtifactType {
  Citation = "citation",
  ComposedOf = "composed-of",
  DependsOn = "depends-on",
  DerivedFrom = "derived-from",
  Documentation = "documentation",
  Justification = "justification",
  Predecessor = "predecessor",
  Successor = "successor"
}

/**
 * Identifies the purpose for this name.
 */
export enum HumanNameUse {
  Anonymous = "anonymous",
  Maiden = "maiden",
  Nickname = "nickname",
  Official = "official",
  Old = "old",
  Temp = "temp",
  Usual = "usual"
}

/**
 * The media type of the language for the expression.
 */
export enum Language {
  ApplicationXFhirQuery = "application/x-fhir-query",
  TextCql = "text/cql",
  TextFhirpath = "text/fhirpath"
}

/**
 * The units of time for the duration, in UCUM units.
 *
 * The units of time for the period in UCUM units.
 */
export enum Unit {
  A = "a",
  D = "d",
  H = "h",
  Min = "min",
  Mo = "mo",
  S = "s",
  Wk = "wk"
}

export enum When {
  AC = "AC",
  ACD = "ACD",
  ACM = "ACM",
  AFTEarly = "AFT.early",
  AFTLate = "AFT.late",
  Acv = "ACV",
  Aft = "AFT",
  C = "C",
  CD = "CD",
  CM = "CM",
  Cv = "CV",
  EVEEarly = "EVE.early",
  EVELate = "EVE.late",
  Eve = "EVE",
  Hs = "HS",
  MORNEarly = "MORN.early",
  MORNLate = "MORN.late",
  Morn = "MORN",
  Night = "NIGHT",
  Noon = "NOON",
  PC = "PC",
  PCM = "PCM",
  Pcd = "PCD",
  Pcv = "PCV",
  Phs = "PHS",
  Wake = "WAKE"
}

/**
 * How the value should be understood and represented - whether the actual value is greater
 * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
 * then the real value is < stated value.
 */
export enum Comparator {
  Comparator = "<=",
  Empty = "<",
  Fluffy = ">",
  Purple = ">="
}

/**
 * The direction of the sort, ascending or descending.
 */
export enum Direction {
  Ascending = "ascending",
  Descending = "descending"
}

/**
 * The type of contributor.
 */
export enum ContributorType {
  Author = "author",
  Editor = "editor",
  Endorser = "endorser",
  Reviewer = "reviewer"
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
  Sms = "sms",
  Url = "url"
}

/**
 * Identifies the purpose for the contact point.
 */
export enum ContactPointUse {
  Home = "home",
  Mobile = "mobile",
  Old = "old",
  Temp = "temp",
  Work = "work"
}

/**
 * The purpose of this identifier.
 */
export enum IdentifierUse {
  Official = "official",
  Old = "old",
  Secondary = "secondary",
  Temp = "temp",
  Usual = "usual"
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
export enum AddressUse {
  Billing = "billing",
  Home = "home",
  Old = "old",
  Temp = "temp",
  Work = "work"
}

export interface SpecimenCollectionClass {
  /**
   * Anatomical location from which the specimen was collected (if subject is a patient). This
   * is the target site.  This element is not used for environmental specimens.
   */
  bodySite?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: string;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Person who collected the specimen.
   */
  collector?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: any[] | boolean | DurationClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Abstinence or reduction from some or all food, drink, or both, for a period of time prior
   * to sample collection.
   */
  fastingStatusCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Abstinence or reduction from some or all food, drink, or both, for a period of time prior
   * to sample collection.
   */
  fastingStatusDuration?: any[] | boolean | DurationClass | number | number | null | string;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the
   * physical measurement of an anatomic pathology sample.
   */
  quantity?: any[] | boolean | QuantityClass | number | number | null | string;
}

export interface CommunicationClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a
   * hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for
   * English, or "en-US" for American English versus "en-EN" for England English.
   */
  language?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Indicates whether or not the patient prefers this language (over other languages he
   * masters up a certain level).
   */
  preferred?: boolean;
  /**
   * A reference to a code defined by a terminology system.
   */
  coding?: Array<any[] | boolean | CodingClass | number | number | null | string>;
  /**
   * A human language representation of the concept as seen/selected/uttered by the user who
   * entered the data and/or which represents the intended meaning of the user.
   */
  text?: string;
}

export interface ObservationComponentClass {
  /**
   * Describes what was observed. Sometimes this is called the observation "code".
   */
  code: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Provides a reason why the expected value in the element Observation.component.value[x] is
   * missing.
   */
  dataAbsentReason?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * A categorical assessment of an observation value.  For example, high, low, normal.
   */
  interpretation?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Guidance on how to interpret the value by comparison to a normal or recommended range.
   */
  referenceRange?: Array<any[] | boolean | ObservationReferenceRangeClass | number | number | null | string>;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueBoolean?: boolean;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueDateTime?: string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueInteger?: number;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valuePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueRange?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueRatio?: any[] | boolean | RatioClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueSampledData?: any[] | boolean | SampledDataClass | number | number | null | string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueString?: string;
  /**
   * The information determined as a result of making the observation, if the information has
   * a simple value.
   */
  valueTime?: string;
}

export interface ObservationReferenceRangeClass {
  /**
   * The age at which this reference range is applicable. This is a neonatal age (e.g. number
   * of weeks at term) if the meaning says so.
   */
  age?: any[] | boolean | RangeClass | number | number | null | string;
  /**
   * Codes to indicate the target population this reference range applies to.  For example, a
   * reference range may be based on the normal population or a particular sex or race.
   * Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For
   * example, to represent a target population of African American females, both a code of
   * female and a code for African American would be used.
   */
  appliesTo?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The value of the high bound of the reference range.  The high bound of the reference
   * range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the
   * high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
   */
  high?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The value of the low bound of the reference range.  The low bound of the reference range
   * endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound
   * is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
   */
  low?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Text based reference range in an observation which may be used when a quantitative range
   * is not appropriate for an observation.  An example would be a reference value of
   * "Negative" or a list or table of "normals".
   */
  text?: string;
  /**
   * Codes to indicate the what part of the targeted reference population it applies to. For
   * example, the normal or therapeutic range.
   */
  type?: any[] | boolean | CodeableConceptClass | number | number | null | string;
}

export interface ContactClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Time period when the contact point was/is in use.
   *
   * The period during which this contact person or organization is valid to be contacted
   * relating to this patient.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
  /**
   * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower
   * rank values are more preferred than those with higher rank values.
   */
  rank?: number;
  /**
   * Telecommunications form for contact point - what communications system is required to
   * make use of the contact.
   */
  system?: System;
  /**
   * Identifies the purpose for the contact point.
   */
  use?: ContactPointUse;
  /**
   * The actual contact point details, in a form that is meaningful to the designated
   * communication system (i.e. phone number or email address).
   */
  value?: string;
  /**
   * Visiting or postal addresses for the contact.
   *
   * Address for the contact person.
   */
  address?: any[] | boolean | AddressClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A name associated with the contact.
   *
   * A name associated with the contact person.
   */
  name?: any[] | boolean | HumanNameClass | number | number | null | string;
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be
   * contacted.
   *
   * A contact detail for the person, e.g. a telephone number or an email address.
   */
  telecom?: Array<any[] | boolean | ContactPointClass | number | number | null | string>;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for
   * administration and record keeping purposes.
   */
  gender?: Gender;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  relationship?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
}

/**
 * Administrative Gender - the gender that the contact person is considered to have for
 * administration and record keeping purposes.
 *
 * Administrative Gender - the gender that the patient is considered to have for
 * administration and record keeping purposes.
 *
 * Administrative Gender - the gender that the person is considered to have for
 * administration and record keeping purposes.
 */
export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
  Unknown = "unknown"
}

export interface SpecimenContainerClass {
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin,
   * Citrate, EDTA.
   */
  additiveCodeableConcept?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin,
   * Citrate, EDTA.
   */
  additiveReference?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * Textual description of the container.
   */
  description?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned
   * identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: Array<any[] | boolean | IdentifierClass | number | number | null | string>;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other
   * appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: any[] | boolean | QuantityClass | number | number | null | string;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: any[] | boolean | CodeableConceptClass | number | number | null | string;
}

export interface DeviceDeviceNameClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The name of the device.
   */
  name?: string;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type?: DeviceDeviceNameType;
}

/**
 * The type of deviceName.
 * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
 */
export enum DeviceDeviceNameType {
  ManufacturerName = "manufacturer-name",
  ModelName = "model-name",
  Other = "other",
  PatientReportedName = "patient-reported-name",
  UdiLabelName = "udi-label-name",
  UserFriendlyName = "user-friendly-name"
}

export interface LinkClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A name which details the functional use for this link - see
   * [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   */
  relation?: string;
  /**
   * The reference details for the link.
   */
  url?: string;
  /**
   * The other patient resource that the link refers to.
   */
  other?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  type?: LinkType;
}

/**
 * The type of link between this patient resource and another patient resource.
 */
export enum LinkType {
  Refer = "refer",
  ReplacedBy = "replaced-by",
  Replaces = "replaces",
  Seealso = "seealso"
}

export interface SpecimenProcessingClass {
  /**
   * Material used in the processing step.
   */
  additive?: Array<any[] | boolean | ReferenceClass | number | number | null | string>;
  /**
   * Textual description of procedure.
   */
  description?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the
   * time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: string;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the
   * time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: any[] | boolean | PeriodClass | number | number | null | string;
}

export interface DevicePropertyClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: Array<any[] | boolean | CodeableConceptClass | number | number | null | string>;
  /**
   * Property value as a quantity.
   */
  valueQuantity?: Array<any[] | boolean | QuantityClass | number | number | null | string>;
}

export interface PractitionerQualificationClass {
  /**
   * Coded representation of the qualification.
   */
  code: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: Array<any[] | boolean | IdentifierClass | number | number | null | string>;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: any[] | boolean | ReferenceClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Period during which the qualification is valid.
   */
  period?: any[] | boolean | PeriodClass | number | number | null | string;
}

export interface DeviceSpecializationClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: string;
}

/**
 * Status of the Device availability.
 *
 * The status of the result value.
 *
 * The availability of the specimen.
 */
export enum ResourceListStatus {
  Active = "active",
  Amended = "amended",
  Available = "available",
  Cancelled = "cancelled",
  Corrected = "corrected",
  EnteredInError = "entered-in-error",
  Final = "final",
  Inactive = "inactive",
  Preliminary = "preliminary",
  Registered = "registered",
  Unavailable = "unavailable",
  Unknown = "unknown",
  Unsatisfactory = "unsatisfactory"
}

export interface NarrativeClass {
  /**
   * The actual narrative content, a stripped down version of XHTML.
   */
  div: any;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data
   * or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status?: NarrativeStatus;
}

/**
 * The status of the narrative - whether it's entirely generated (from just the defined data
 * or the extensions too), or whether a human authored it and it may contain additional data.
 */
export enum NarrativeStatus {
  Additional = "additional",
  Empty = "empty",
  Extensions = "extensions",
  Generated = "generated"
}

export interface DeviceUdiCarrierClass {
  /**
   * The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology
   * representation of the barcode string as printed on the packaging of the device - e.g., a
   * barcode or RFID.   Because of limitations on character sets in XML and the need to
   * round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
   */
  carrierAIDC?: string;
  /**
   * The full UDI carrier as the human readable form (HRF) representation of the barcode
   * string as printed on the packaging of the device.
   */
  carrierHRF?: string;
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the
   * labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string;
  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?: EntryType;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA
   * issuers include :
   * 1) GS1:
   * http://hl7.org/fhir/NamingSystem/gs1-di,
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI,
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: string;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All
   * UDIs are globally unique within a single namespace with the appropriate repository uri as
   * the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is
   * http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
}

/**
 * A coded entry to indicate how the data was entered.
 */
export enum EntryType {
  Barcode = "barcode",
  Card = "card",
  Manual = "manual",
  Rfid = "rfid",
  SelfReported = "self-reported",
  Unknown = "unknown"
}

export interface DeviceVersionClass {
  /**
   * A single component of the device version.
   */
  component?: any[] | boolean | IdentifierClass | number | number | null | string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The type of the device version.
   */
  type?: any[] | boolean | CodeableConceptClass | number | number | null | string;
  /**
   * The version text.
   */
  value?: string;
}

export interface BundleLinkClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * A name which details the functional use for this link - see
   * [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
   */
  relation?: string;
  /**
   * The reference details for the link.
   */
  url?: string;
}

export interface BundleRequestClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Only perform the operation if the Etag value matches. For more information, see the API
   * section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: string;
  /**
   * Only perform the operation if the last updated date matches. See the API documentation
   * for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: string;
  /**
   * Instruct the server not to perform the create if a specified resource already exists. For
   * further information, see the API documentation for ["Conditional
   * Create"](http.html#ccreate). This is just the query portion of the URL - what follows the
   * "?" (not including the "?").
   */
  ifNoneExist?: string;
  /**
   * If the ETag values match, return a 304 Not Modified status. See the API documentation for
   * ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: string;
  /**
   * In a transaction or batch, this is the HTTP action to be executed for this entry. In a
   * history bundle, this indicates the HTTP action that occurred.
   */
  method?: Method;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * The URL for this entry, relative to the root (the address to which the request is posted).
   */
  url?: string;
}

/**
 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a
 * history bundle, this indicates the HTTP action that occurred.
 */
export enum Method {
  Delete = "DELETE",
  Get = "GET",
  Head = "HEAD",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT"
}

export interface BundleSearchClass {
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element. To make the use of extensions safe and manageable, there is a strict set
   * of governance  applied to the definition and use of extensions. Though any implementer
   * can define an extension, there is a set of requirements that SHALL be met as part of the
   * definition of the extension.
   */
  extension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * Unique id for the element within a resource (for internal references). This may be any
   * string value that does not contain spaces.
   */
  id?: string;
  /**
   * Why this entry is in the result set - whether it's included as a match or because of an
   * _include requirement, or to convey information or warning information about the search
   * process.
   */
  mode?: Mode;
  /**
   * May be used to represent additional information that is not part of the basic definition
   * of the element and that modifies the understanding of the element in which it is
   * contained and/or the understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the definition and use of
   * extensions. Though any implementer can define an extension, there is a set of
   * requirements that SHALL be met as part of the definition of the extension. Applications
   * processing a resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
   * DomainResource (including cannot change the meaning of modifierExtension itself).
   */
  modifierExtension?: Array<any[] | boolean | ExtensionClass | number | number | null | string>;
  /**
   * When searching, the server's search ranking score for the entry.
   */
  score?: number;
}

/**
 * Why this entry is in the result set - whether it's included as a match or because of an
 * _include requirement, or to convey information or warning information about the search
 * process.
 */
export enum Mode {
  Include = "include",
  Match = "match",
  Outcome = "outcome"
}

/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
export enum BundleType {
  Batch = "batch",
  BatchResponse = "batch-response",
  Collection = "collection",
  Document = "document",
  History = "history",
  Message = "message",
  Searchset = "searchset",
  Transaction = "transaction",
  TransactionResponse = "transaction-response"
}

export enum PDTHealthCertV2Type {
  Art = "ART",
  Pcr = "PCR",
  Ser = "SER"
}

export enum Version {
  PdtHealthcertV20 = "pdt-healthcert-v2.0"
}
