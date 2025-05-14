// import { ChangeEvent, useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { FaCheckCircle } from "react-icons/fa";
// import { Line, Bar } from "react-chartjs-2";
// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface FormData {
//   gender: string;
//   ageGroup: string;
//   livingArea: string;
//   occupation: string;
//   pregnancyStatus: string;
//   trimester: string;
//   petOwnership: string;
//   catExposure: string;
//   immuneCondition: string[];
//   rawMeatConsumption: string;
//   previousToxoplasmosis: string;
//   noPriorImmunity: string;
//   unpasteurizedDairy: string;
//   maternalMalnutrition: string;
//   preExistingInfections: string;
//   gestationalDiabetes: string;
//   immunosuppressiveDrugs: string;
//   longTermAntibiotics: string;
//   corticosteroids: string;
//   placentalInsufficiency: string;
//   pretermLabor: string;
//   multiplePregnancies: string;
// }

// export default function OcularToxoplasmosis() {
//   const [showForm, setShowForm] = useState(false);
//   const [isFemale, setIsFemale] = useState(false);
//   const [isPregnant, setIsPregnant] = useState(false);
//   const [isPlanningPregnancy, setIsPlanningPregnancy] = useState(false);
//   const [showCongenitalPrediction, setShowCongenitalPrediction] =
//     useState(false);
//   const [ocularRiskScore, setOcularRiskScore] = useState<number | null>(null);
//   const [congenitalRiskScore, setCongenitalRiskScore] = useState<number | null>(
//     null
//   );

//   const [formData, setFormData] = useState<FormData>({
//     gender: "",
//     ageGroup: "",
//     livingArea: "",
//     occupation: "",
//     pregnancyStatus: "",
//     trimester: "",
//     petOwnership: "",
//     catExposure: "",
//     immuneCondition: [],
//     rawMeatConsumption: "",
//     previousToxoplasmosis: "",
//     noPriorImmunity: "",
//     unpasteurizedDairy: "",
//     maternalMalnutrition: "",
//     preExistingInfections: "",
//     gestationalDiabetes: "",
//     immunosuppressiveDrugs: "",
//     longTermAntibiotics: "",
//     corticosteroids: "",
//     placentalInsufficiency: "",
//     pretermLabor: "",
//     multiplePregnancies: "",
//   });

//   const handleAgreeClick = () => {
//     setShowForm(true);
//   };
//   const componentRef = useRef<HTMLDivElement>(null);
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 10mm;
//       }
//       @media print {
//         body {
//           padding: 20px;
//           background-color: white !important;
//         }
//         .no-print {
//           display: none !important;
//         }
//       }
//     `,
//   });
//   const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const gender = event.target.value;
//     setIsFemale(gender === "female");
//     setIsPregnant(false);
//     setIsPlanningPregnancy(false);
//     setFormData({ ...formData, gender, pregnancyStatus: "", trimester: "" });
//   };

//   const handleCheckboxChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     category: keyof FormData
//   ) => {
//     const value = event.target.value;
//     const isChecked = event.target.checked;

//     if (category === "immuneCondition") {
//       if (value === "None" && isChecked) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [category]: ["None"],
//         }));
//       } else if (value !== "None" && isChecked) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [category]: prevData[category].filter((item) => item !== "None"),
//         }));
//       }
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       [category]: isChecked
//         ? [...prevData[category], value]
//         : prevData[category].filter((item: string) => item !== value),
//     }));
//   };

//   const handlePregnancyChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     const isPregnant = value === "pregnant";
//     const isPlanning = value === "planning";
//     setIsPregnant(isPregnant);
//     setIsPlanningPregnancy(isPlanning);
//     setFormData({
//       ...formData,
//       pregnancyStatus: value,
//       trimester: isPregnant || isPlanning ? formData.trimester : "",
//     });
//   };

//   const handleRadioChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     category: keyof FormData
//   ) => {
//     const value = event.target.value;
//     setFormData({
//       ...formData,
//       [category]: value,
//     });
//   };

//   const isFormValid = () => {
//     const requiredFields: (keyof FormData)[] = [
//       "gender",
//       "ageGroup",
//       "livingArea",
//       "occupation",
//       "petOwnership",
//       "catExposure",
//       "rawMeatConsumption",
//     ];
//     if (isFemale) {
//       requiredFields.push("pregnancyStatus");
//       if (isPregnant || isPlanningPregnancy) {
//         requiredFields.push("trimester");
//       }
//     }
//     return (
//       requiredFields.every((field) => formData[field] !== "") &&
//       formData.immuneCondition.length > 0
//     );
//   };

//   const calculateRiskScores = (formData: FormData) => {
//     const weights: Record<string, Record<string, number>> = {
//       ageGroup: {
//         infant: 0.2,
//         child: 0.1,
//         teenager: 0.3,
//         adult: 0.4,
//         elderly: 0.5,
//       },
//       livingArea: { urban: 0, rural: 0.3, suburban: 0.2 },
//       occupation: { "office-worker": 0, "healthcare-worker": 0.4 },
//       petOwnership: { yes: 0.3, no: 0 },
//       catExposure: { yes: 0.4, no: 0 },
//       rawMeatConsumption: { yes: 0.5, no: 0 },
//       immuneCondition: {
//         "HIV/AIDS": 0.5,
//         Cancer: 0.4,
//         Diabetes: 0.3,
//         "Organ Transplant": 0.5,
//         None: 0,
//       },
//       pregnancyStatus: { pregnant: 0.5, "not-pregnant": 0, planning: 0.3 },
//       trimester: {
//         "first-trimester": 0.1,
//         "second-trimester": 0.2,
//         "third-trimester": 0.3,
//       },
//       previousToxoplasmosis: { yes: 0.5, no: 0 },
//       noPriorImmunity: { yes: 0.5, no: 0 },
//       unpasteurizedDairy: { yes: 0.4, no: 0 },
//       maternalMalnutrition: { yes: 0.3, no: 0 },
//       preExistingInfections: { yes: 0.4, no: 0 },
//       gestationalDiabetes: { yes: 0.3, no: 0 },
//       immunosuppressiveDrugs: { yes: 0.5, no: 0 },
//       longTermAntibiotics: { yes: 0.4, no: 0 },
//       corticosteroids: { yes: 0.3, no: 0 },
//       placentalInsufficiency: { yes: 0.4, no: 0 },
//       pretermLabor: { yes: 0.3, no: 0 },
//       multiplePregnancies: { yes: 0.4, no: 0 },
//     };

//     let ocularRiskScore = 0;
//     let congenitalRiskScore = 0;

//     Object.keys(formData).forEach((key) => {
//       if (weights[key]) {
//         if (Array.isArray(formData[key])) {
//           formData[key].forEach((value) => {
//             ocularRiskScore += weights[key][value] || 0;
//             congenitalRiskScore += weights[key][value] || 0;
//           });
//         } else {
//           ocularRiskScore += weights[key][formData[key]] || 0;
//           congenitalRiskScore += weights[key][formData[key]] || 0;
//         }
//       }
//     });

//     return { ocularRiskScore, congenitalRiskScore };
//   };

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     if (isFormValid()) {
//       const { ocularRiskScore, congenitalRiskScore } =
//         calculateRiskScores(formData);
//       setOcularRiskScore(ocularRiskScore);
//       setCongenitalRiskScore(congenitalRiskScore);
//       setShowForm(false);
//       if (isPregnant) {
//         setShowCongenitalPrediction(true);
//       }
//     }
//   };

//   const OcularToxoplasmosisChart = ({
//     ocularRiskScore,
//   }: {
//     ocularRiskScore: number;
//   }) => {
//     const data = {
//       labels: ["Initial", "1 Month", "3 Months", "6 Months", "1 Year"],
//       datasets: [
//         {
//           label: "Ocular Toxoplasmosis Progression",
//           data: [
//             ocularRiskScore,
//             ocularRiskScore * 1.2,
//             ocularRiskScore * 1.5,
//             ocularRiskScore * 1.8,
//             ocularRiskScore * 2,
//           ],
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(0, 0, 0, 0)",
//         },
//       ],
//     };

//     const options = {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           position: "top" as const,
//         },
//         title: {
//           display: true,
//           text: "Ocular Toxoplasmosis Progression",
//         },
//       },
//     };

//     const analysis = (
//       <div style={{ marginTop: "20px", marginBottom: "20px" }}>
//         <p style={{ color: "black" }}>
//           <strong>Analysis:</strong> The progression of ocular toxoplasmosis is
//           influenced by several factors:
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>
//             Immune Conditions
//           </span>
//           : Conditions like {formData.immuneCondition.join(", ")} weaken the
//           immune system, leading to faster progression.
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>
//             Raw Meat Consumption
//           </span>
//           :{" "}
//           {formData.rawMeatConsumption === "yes"
//             ? "Consuming raw meat increases the risk."
//             : "Avoiding raw meat reduces the risk."}
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>Cat Exposure</span>
//           :{" "}
//           {formData.catExposure === "yes"
//             ? "Exposure to cats increases the risk."
//             : "No exposure to cats reduces the risk."}
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>Age Group</span>:
//           Being in the {formData.ageGroup} age group affects the progression
//           rate.
//           <br />
//           <strong>Normal Range:</strong> A score below{" "}
//           <span style={{ color: "green", fontWeight: "bold" }}>1.0</span>{" "}
//           indicates low risk, while scores above{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>2.0</span> indicate
//           high risk.
//         </p>
//       </div>
//     );

//     return (
//       <div style={{ height: "300px", width: "100%", marginBottom: "40px" }}>
//         <Line data={data} options={options} />
//         {analysis}
//       </div>
//     );
//   };

//   const CongenitalToxoplasmosisChart = ({
//     congenitalRiskScore,
//   }: {
//     congenitalRiskScore: number;
//   }) => {
//     // Determine risk level and percentage
//     let riskLevel: string;
//     let riskPercentage: number;

//     if (congenitalRiskScore < 0.5) {
//       riskLevel = "Low Risk";
//       riskPercentage = (1 - congenitalRiskScore) * 100;
//     } else if (congenitalRiskScore >= 0.5 && congenitalRiskScore < 1.0) {
//       riskLevel = "Medium Risk";
//       riskPercentage = congenitalRiskScore * 100;
//     } else {
//       riskLevel = "High Risk";
//       riskPercentage = congenitalRiskScore * 100;
//     }

//     const data = {
//       labels: [riskLevel],
//       datasets: [
//         {
//           label: "Congenital Toxoplasmosis Risk",
//           data: [riskPercentage],
//           backgroundColor:
//             riskLevel === "Low Risk"
//               ? "rgba(75, 192, 192, 0.2)"
//               : riskLevel === "Medium Risk"
//               ? "rgba(255, 206, 86, 0.2)"
//               : "rgba(255, 99, 132, 0.2)",
//           borderColor:
//             riskLevel === "Low Risk"
//               ? "rgba(75, 192, 192, 1)"
//               : riskLevel === "Medium Risk"
//               ? "rgba(255, 206, 86, 1)"
//               : "rgba(255, 99, 132, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };

//     const options = {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           position: "top" as const,
//         },
//         title: {
//           display: true,
//           text: "Congenital Toxoplasmosis Risk Prediction",
//         },
//       },
//     };

//     const analysis = (
//       <div style={{ marginTop: "20px", marginBottom: "20px" }}>
//         <p style={{ color: "black" }}>
//           <strong>Analysis:</strong> The risk of congenital toxoplasmosis is
//           influenced by:
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>
//             Pregnancy Status
//           </span>
//           :{" "}
//           {formData.pregnancyStatus === "pregnant"
//             ? "Being pregnant increases the risk."
//             : "Not being pregnant reduces the risk."}
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>Trimester</span>:{" "}
//           {formData.trimester
//             ? `Being in the ${formData.trimester} trimester affects the risk.`
//             : ""}
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>
//             Immune Conditions
//           </span>
//           : Conditions like {formData.immuneCondition.join(", ")} weaken the
//           immune system, increasing the risk.
//           <br />-{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>
//             Previous Toxoplasmosis
//           </span>
//           :{" "}
//           {formData.previousToxoplasmosis === "yes"
//             ? "Previous infection increases the risk."
//             : "No previous infection reduces the risk."}
//           <br />
//           <strong>Normal Range:</strong> A score below{" "}
//           <span style={{ color: "green", fontWeight: "bold" }}>0.5</span>{" "}
//           indicates low risk, scores between{" "}
//           <span style={{ color: "orange", fontWeight: "bold" }}>
//             0.5 and 1.0
//           </span>{" "}
//           indicate medium risk, and scores above{" "}
//           <span style={{ color: "red", fontWeight: "bold" }}>1.0</span> indicate
//           high risk.
//         </p>
//       </div>
//     );

//     const suggestions = (
//       <div style={{ marginTop: "20px", marginBottom: "20px" }}>
//         <p style={{ color: "black" }}>
//           <strong>Suggestions:</strong>
//           <br />-{" "}
//           {formData.immuneCondition.includes("None")
//             ? "Since you have no immune conditions, the risk of progression is reduced. Maintain a healthy lifestyle and regular check-ups."
//             : "Given your immune conditions, it is crucial to follow medical advice strictly. Avoid raw meat, unpasteurized dairy, and contact with cats."}
//           <br />-{" "}
//           {formData.pregnancyStatus === "pregnant"
//             ? "If pregnant, ensure regular prenatal check-ups and follow your doctor's advice to minimize risks to the fetus."
//             : "If planning pregnancy, consult your doctor for pre-pregnancy counseling."}
//         </p>
//       </div>
//     );

//     return (
//       <div style={{ height: "300px", width: "100%", marginBottom: "40px" }}>
//         <Bar data={data} options={options} />
//         {analysis}
//         {suggestions}
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#E0F7FA",
//       }}
//     >
//       <Card
//         ref={componentRef}
//         className="p-4"
//         style={{
//           width: "100%",
//           maxWidth: "800px",
//           backgroundColor: " #FAFAFA",
//           borderRadius: "15px",
//           boxShadow: "0 4px 10px rgba(31, 41, 55, 0.5)",
//           overflowY: "auto",
//           maxHeight: "90vh",
//         }}
//       >
//         {!showForm && ocularRiskScore === null && (
//           <>
//             <h2
//               className="text-center"
//               style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}
//             >
//               ⚠️ Ocular Toxoplasmosis Detected
//             </h2>
//             <p
//               className="text-center fs-4"
//               style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}
//             >
//               Please fill in your immunity details to get Progression details of
//               Ocular Toxoplasmosis.
//             </p>
//             <div className="text-center">
//               <Button
//                 variant="danger"
//                 onClick={handleAgreeClick}
//                 className="w-50 my-3"
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 Yes, I agree !
//               </Button>
//             </div>
//           </>
//         )}

//         {showForm && (
//           <Form>
//             <h3
//               className="text-center mb-4"
//               style={{
//                 color: "navy",
//                 fontWeight: "bold",
//                 fontSize: "1.3rem",
//               }}
//             >
//               Immunity Information for Ocular Toxoplasmosis Progression
//             </h3>
//             <Form.Group className="mb-3">
//               <Form.Label
//                 className="fs-5"
//                 style={{ color: "black", fontWeight: "bold" }}
//               >
//                 Gender <span style={{ color: "red" }}>*</span>
//               </Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="male"
//                     label="Male"
//                     name="gender"
//                     value="male"
//                     onChange={(e) => handleGenderChange(e)}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="female"
//                     label="Female"
//                     name="gender"
//                     value="female"
//                     onChange={(e) => handleGenderChange(e)}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="other"
//                     label="Other"
//                     name="gender"
//                     value="other"
//                     onChange={(e) => handleGenderChange(e)}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label
//                 className="fs-5"
//                 style={{ color: "black", fontWeight: "bold" }}
//               >
//                 Age Group <span style={{ color: "red" }}>*</span>
//               </Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="infant"
//                     label="Infant (0-1 year)"
//                     value="infant"
//                     name="ageGroup"
//                     onChange={(e) => handleRadioChange(e, "ageGroup")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="child"
//                     label="Child (1-12 years)"
//                     value="child"
//                     name="ageGroup"
//                     onChange={(e) => handleRadioChange(e, "ageGroup")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="teenager"
//                     label="Teenager (13-18 years)"
//                     value="teenager"
//                     name="ageGroup"
//                     onChange={(e) => handleRadioChange(e, "ageGroup")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="adult"
//                     label="Adult (19-50 years)"
//                     value="adult"
//                     name="ageGroup"
//                     onChange={(e) => handleRadioChange(e, "ageGroup")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="elderly"
//                     label="Elderly (50+ years)"
//                     value="elderly"
//                     name="ageGroup"
//                     onChange={(e) => handleRadioChange(e, "ageGroup")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label
//                 className="fs-5"
//                 style={{ color: "black", fontWeight: "bold" }}
//               >
//                 Living Area <span style={{ color: "red" }}>*</span>
//               </Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="urban"
//                     label="Urban"
//                     value="urban"
//                     name="livingArea"
//                     onChange={(e) => handleRadioChange(e, "livingArea")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="rural"
//                     label="Rural"
//                     value="rural"
//                     name="livingArea"
//                     onChange={(e) => handleRadioChange(e, "livingArea")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="suburban"
//                     label="Suburban"
//                     value="suburban"
//                     name="livingArea"
//                     onChange={(e) => handleRadioChange(e, "livingArea")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label
//                 className="fs-5"
//                 style={{ color: "black", fontWeight: "bold" }}
//               >
//                 Occupation <span style={{ color: "red" }}>*</span>
//               </Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="office-worker"
//                     label="Office worker"
//                     value="office-worker"
//                     name="occupation"
//                     onChange={(e) => handleRadioChange(e, "occupation")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     id="healthcare-worker"
//                     label="Healthcare worker"
//                     value="healthcare-worker"
//                     name="occupation"
//                     onChange={(e) => handleRadioChange(e, "occupation")}
//                     className="fs-5"
//                     style={{ color: "black" }}
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="fs-5 fw-bold">
//                 <span style={{ color: "black", fontWeight: "bold" }}>
//                   Do you own a pet?
//                 </span>
//                 <span className="text-danger" style={{ color: "red" }}>
//                   *
//                 </span>
//               </Form.Label>
//               <Row style={{ color: "black" }}>
//                 {["yes", "no"].map((option) => (
//                   <Col key={option}>
//                     <Form.Check
//                       type="radio"
//                       label={option.charAt(0).toUpperCase() + option.slice(1)}
//                       value={option}
//                       name="petOwnership"
//                       onChange={(e) => handleRadioChange(e, "petOwnership")}
//                       className="fs-5"
//                       style={{ color: "black" }}
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="fs-5 fw-bold">
//                 <span style={{ color: "black", fontWeight: "bold" }}>
//                   Do you come in contact with cats?
//                 </span>
//                 <span className="text-danger" style={{ color: "red" }}>
//                   {" "}
//                   *
//                 </span>
//               </Form.Label>
//               <Row style={{ color: "black" }}>
//                 {["yes", "no"].map((option) => (
//                   <Col key={option}>
//                     <Form.Check
//                       type="radio"
//                       label={option.charAt(0).toUpperCase() + option.slice(1)}
//                       value={option}
//                       name="catExposure"
//                       onChange={(e) => handleRadioChange(e, "catExposure")}
//                       className="fs-5"
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="fs-5 fw-bold">
//                 <span style={{ color: "black", fontWeight: "bold" }}>
//                   Do you have any immune conditions? (Select all that apply)
//                 </span>
//                 <span className="text-danger" style={{ color: "red" }}>
//                   {" "}
//                   *
//                 </span>
//               </Form.Label>
//               <Row span style={{ color: "black" }}>
//                 {[
//                   "HIV/AIDS",
//                   "Cancer",
//                   "Diabetes",
//                   "Organ Transplant",
//                   "None",
//                 ].map((condition) => (
//                   <Col key={condition}>
//                     <Form.Check
//                       type="checkbox"
//                       label={condition}
//                       value={condition}
//                       onChange={(e) =>
//                         handleCheckboxChange(e, "immuneCondition")
//                       }
//                       className="fs-5"
//                       disabled={
//                         condition !== "None" &&
//                         formData.immuneCondition.includes("None")
//                       }
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="fs-5 fw-bold">
//                 <span style={{ color: "black", fontWeight: "bold" }}>
//                   Do you consume raw or undercooked meat?{" "}
//                 </span>
//                 <span className="text-danger" style={{ color: "red" }}>
//                   {" "}
//                   *
//                 </span>
//               </Form.Label>
//               <Row style={{ color: "black" }}>
//                 {["yes", "no"].map((option) => (
//                   <Col key={option}>
//                     <Form.Check
//                       type="radio"
//                       label={option.charAt(0).toUpperCase() + option.slice(1)}
//                       value={option}
//                       name="rawMeatConsumption"
//                       onChange={(e) =>
//                         handleRadioChange(e, "rawMeatConsumption")
//                       }
//                       className="fs-5"
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </Form.Group>

//             {isFemale && (
//               <div>
//                 <h4
//                   className="fs-4"
//                   style={{
//                     color: "navy",
//                     fontWeight: "bold",
//                     fontSize: "1.3rem",
//                   }}
//                 >
//                   Immunity Information for Congenital Toxoplasmosis Prediction
//                 </h4>
//                 <Form.Group className="mb-3">
//                   <Form.Label
//                     className="fs-5"
//                     style={{ color: "black", fontWeight: "bold" }}
//                   >
//                     Pregnancy Status <span style={{ color: "red" }}>*</span>
//                   </Form.Label>
//                   <Row>
//                     <Col>
//                       <Form.Check
//                         type="radio"
//                         id="pregnant"
//                         label="Pregnant"
//                         value="pregnant"
//                         name="pregnancyStatus"
//                         onChange={handlePregnancyChange}
//                         className="fs-5"
//                         style={{ color: "black" }}
//                       />
//                     </Col>
//                     <Col>
//                       <Form.Check
//                         type="radio"
//                         id="not-pregnant"
//                         label="Not Pregnant"
//                         value="not-pregnant"
//                         name="pregnancyStatus"
//                         onChange={handlePregnancyChange}
//                         className="fs-5"
//                         style={{ color: "black" }}
//                       />
//                     </Col>
//                     <Col>
//                       <Form.Check
//                         type="radio"
//                         label="Planning Pregnancy"
//                         name="pregnancyStatus"
//                         value="planning"
//                         onChange={handlePregnancyChange}
//                         className="fs-5"
//                         style={{ color: "black" }}
//                       />
//                     </Col>
//                   </Row>
//                 </Form.Group>

//                 {(isPregnant || isPlanningPregnancy) && (
//                   <Form.Group className="mb-3">
//                     <Form.Label
//                       className="fs-5"
//                       style={{ color: "black", fontWeight: "bold" }}
//                     >
//                       Trimester <span style={{ color: "red" }}>*</span>
//                     </Form.Label>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="radio"
//                           id="first-trimester"
//                           label="First Trimester"
//                           value="first-trimester"
//                           name="trimester"
//                           onChange={(e) => handleRadioChange(e, "trimester")}
//                           className="fs-5"
//                           style={{ color: "black" }}
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="radio"
//                           id="second-trimester"
//                           label="Second Trimester"
//                           value="second-trimester"
//                           name="trimester"
//                           onChange={(e) => handleRadioChange(e, "trimester")}
//                           className="fs-5"
//                           style={{ color: "black" }}
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="radio"
//                           id="third-trimester"
//                           label="Third Trimester"
//                           value="third-trimester"
//                           name="trimester"
//                           onChange={(e) => handleRadioChange(e, "trimester")}
//                           className="fs-5"
//                           style={{ color: "black" }}
//                         />
//                       </Col>
//                     </Row>
//                     <Form.Label
//                       className="fs-5"
//                       style={{ color: "black", fontWeight: "bold" }}
//                     >
//                       Fetal & Maternal Risk Factors
//                       <span style={{ color: "red" }}>*</span>
//                     </Form.Label>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           style={{ color: "black" }}
//                           label="Previous toxoplasmosis infection before pregnancy"
//                           name="previousToxoplasmosis"
//                           onChange={(e) =>
//                             handleRadioChange(e, "previousToxoplasmosis")
//                           }
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="No prior immunity to Toxoplasma"
//                           name="noPriorImmunity"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "noPriorImmunity")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Exposure to infected cats during pregnancy"
//                           name="catExposure"
//                           style={{ color: "black" }}
//                           onChange={(e) => handleRadioChange(e, "catExposure")}
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Consumption of unpasteurized dairy during pregnancy"
//                           name="unpasteurizedDairy"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "unpasteurizedDairy")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Form.Label
//                       className="fs-5"
//                       style={{ color: "black", fontWeight: "bold" }}
//                     >
//                       Pregnancy-Related Health Conditions{" "}
//                       <span style={{ color: "red" }}>*</span>
//                     </Form.Label>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Maternal malnutrition (weakened immunity)"
//                           name="maternalMalnutrition"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "maternalMalnutrition")
//                           }
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Pre-existing infections that weaken immunity"
//                           name="preExistingInfections"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "preExistingInfections")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Gestational diabetes (can affect immune response)"
//                           name="gestationalDiabetes"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "gestationalDiabetes")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Form.Label
//                       className="fs-5"
//                       style={{ color: "black", fontWeight: "bold" }}
//                     >
//                       Maternal Medications & Treatments Affecting Immunity{" "}
//                       <span style={{ color: "red" }}>*</span>
//                     </Form.Label>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Immunosuppressive drugs during pregnancy"
//                           name="immunosuppressiveDrugs"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "immunosuppressiveDrugs")
//                           }
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Long-term antibiotic use affecting gut microbiome"
//                           name="longTermAntibiotics"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "longTermAntibiotics")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Corticosteroid use"
//                           style={{ color: "black" }}
//                           name="corticosteroids"
//                           onChange={(e) =>
//                             handleRadioChange(e, "corticosteroids")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                     <Form.Label
//                       className="fs-5"
//                       style={{ color: "black", fontWeight: "bold" }}
//                     >
//                       Fetal Exposure & Risks{" "}
//                       <span style={{ color: "red" }}>*</span>
//                     </Form.Label>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Placental insufficiency (poor nutrient/oxygen delivery)"
//                           name="placentalInsufficiency"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "placentalInsufficiency")
//                           }
//                         />
//                       </Col>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Preterm labor (higher risk of complications)"
//                           name="pretermLabor"
//                           style={{ color: "black" }}
//                           onChange={(e) => handleRadioChange(e, "pretermLabor")}
//                         />
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <Form.Check
//                           type="checkbox"
//                           label="Multiple pregnancies (twins/triplets – increased risk)"
//                           name="multiplePregnancies"
//                           style={{ color: "black" }}
//                           onChange={(e) =>
//                             handleRadioChange(e, "multiplePregnancies")
//                           }
//                         />
//                       </Col>
//                     </Row>
//                   </Form.Group>
//                 )}
//               </div>
//             )}

//             <Button
//               variant={isFormValid() ? "primary" : "secondary"}
//               type="submit"
//               disabled={!isFormValid()}
//               className="w-100 fs-5"
//               style={{ color: "black", opacity: isFormValid() ? 1 : 0.5 }}
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </Form>
//         )}
//         {ocularRiskScore !== null && (
//           <>
//             <OcularToxoplasmosisChart ocularRiskScore={ocularRiskScore} />
//             <div style={{ marginBottom: "40px" }}></div>{" "}
//             {/* Spacer between graphs */}
//           </>
//         )}

//         {showCongenitalPrediction && congenitalRiskScore !== null && (
//           <>
//             <div style={{ marginTop: "300px" }}></div>{" "}
//             {/* Spacer before congenital graph */}
//             <CongenitalToxoplasmosisChart
//               congenitalRiskScore={congenitalRiskScore}
//             />
//           </>
//         )}

//         <div className="text-center no-print" style={{ marginBottom: "20px" }}>
//           <Button
//             variant="info"
//             onClick={handlePrint}
//             style={{ fontWeight: "bold" }}
//           >
//             Print Report
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }

import { ChangeEvent, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import { Line, Bar } from "react-chartjs-2";
import { useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface FormData {
  gender: string;
  ageGroup: string;
  livingArea: string;
  occupation: string;
  pregnancyStatus: string;
  trimester: string;
  petOwnership: string;
  catExposure: string;
  immuneCondition: string[];
  rawMeatConsumption: string;
  previousToxoplasmosis: string;
  noPriorImmunity: string;
  unpasteurizedDairy: string;
  maternalMalnutrition: string;
  preExistingInfections: string;
  gestationalDiabetes: string;
  immunosuppressiveDrugs: string;
  longTermAntibiotics: string;
  corticosteroids: string;
  placentalInsufficiency: string;
  pretermLabor: string;
  multiplePregnancies: string;
}

export default function OcularToxoplasmosis() {
  const [showForm, setShowForm] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isPregnant, setIsPregnant] = useState(false);
  const [isPlanningPregnancy, setIsPlanningPregnancy] = useState(false);
  const [showCongenitalPrediction, setShowCongenitalPrediction] =
    useState(false);
  const [ocularRiskScore, setOcularRiskScore] = useState<number | null>(null);
  const [congenitalRiskScore, setCongenitalRiskScore] = useState<number | null>(
    null
  );

  const [formData, setFormData] = useState<FormData>({
    gender: "",
    ageGroup: "",
    livingArea: "",
    occupation: "",
    pregnancyStatus: "",
    trimester: "",
    petOwnership: "",
    catExposure: "",
    immuneCondition: [],
    rawMeatConsumption: "",
    previousToxoplasmosis: "",
    noPriorImmunity: "",
    unpasteurizedDairy: "",
    maternalMalnutrition: "",
    preExistingInfections: "",
    gestationalDiabetes: "",
    immunosuppressiveDrugs: "",
    longTermAntibiotics: "",
    corticosteroids: "",
    placentalInsufficiency: "",
    pretermLabor: "",
    multiplePregnancies: "",
  });

  const handleAgreeClick = () => {
    setShowForm(true);
  };

  const componentRef = useRef<HTMLDivElement>(null);
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   pageStyle: `
  //     @page {
  //       size: A4;
  //       margin: 10mm;
  //     }
  //     @media print {
  //       body {
  //         padding: 20px;
  //         background-color: white !important;
  //       }
  //       .no-print {
  //         display: none !important;
  //       }
  //     }
  //   `,
  // });

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    setIsFemale(gender === "female");
    setIsPregnant(false);
    setIsPlanningPregnancy(false);
    setFormData({ ...formData, gender, pregnancyStatus: "", trimester: "" });
  };

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    category: keyof FormData
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (category === "immuneCondition") {
      if (value === "None" && isChecked) {
        setFormData((prevData) => ({
          ...prevData,
          immuneCondition: ["None"],
        }));
        return;
      } else if (value === "None" && !isChecked) {
        setFormData((prevData) => ({
          ...prevData,
          immuneCondition: [],
        }));
        return;
      }

      if (isChecked) {
        setFormData((prevData) => ({
          ...prevData,
          immuneCondition: [
            ...prevData.immuneCondition.filter((item) => item !== "None"),
            value,
          ],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          immuneCondition: prevData.immuneCondition.filter(
            (item) => item !== value
          ),
        }));
      }
      return;
    }

    // For other checkbox fields (though your form doesn't seem to have others)
    setFormData((prevData) => ({
      ...prevData,
      [category]: isChecked ? "yes" : "no",
    }));
  };

  const handlePregnancyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isPregnant = value === "pregnant";
    const isPlanning = value === "planning";
    setIsPregnant(isPregnant);
    setIsPlanningPregnancy(isPlanning);
    setFormData({
      ...formData,
      pregnancyStatus: value,
      trimester: isPregnant || isPlanning ? formData.trimester : "",
    });
  };

  const handleRadioChange = (
    event: ChangeEvent<HTMLInputElement>,
    category: keyof FormData
  ) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  const isFormValid = () => {
    const requiredFields: (keyof FormData)[] = [
      "gender",
      "ageGroup",
      "livingArea",
      "occupation",
      "petOwnership",
      "catExposure",
      "rawMeatConsumption",
    ];

    if (isFemale) {
      requiredFields.push("pregnancyStatus");
      if (isPregnant || isPlanningPregnancy) {
        requiredFields.push("trimester");
      }
    }

    // Check all required fields have values
    const hasAllRequiredFields = requiredFields.every(
      (field) => formData[field] !== ""
    );

    // Check immuneCondition has at least one selection
    const hasImmuneCondition = formData.immuneCondition.length > 0;

    return hasAllRequiredFields && hasImmuneCondition;
  };

  const calculateRiskScores = (formData: FormData) => {
    const weights: Record<string, Record<string, number>> = {
      ageGroup: {
        infant: 0.2,
        child: 0.1,
        teenager: 0.3,
        adult: 0.4,
        elderly: 0.5,
      },
      livingArea: { urban: 0, rural: 0.3, suburban: 0.2 },
      occupation: { "office-worker": 0, "healthcare-worker": 0.4 },
      petOwnership: { yes: 0.3, no: 0 },
      catExposure: { yes: 0.4, no: 0 },
      rawMeatConsumption: { yes: 0.5, no: 0 },
      immuneCondition: {
        "HIV/AIDS": 0.5,
        Cancer: 0.4,
        Diabetes: 0.3,
        "Organ Transplant": 0.5,
        None: 0,
      },
      pregnancyStatus: { pregnant: 0.5, "not-pregnant": 0, planning: 0.3 },
      trimester: {
        "first-trimester": 0.1,
        "second-trimester": 0.2,
        "third-trimester": 0.3,
      },
      previousToxoplasmosis: { yes: 0.5, no: 0 },
      noPriorImmunity: { yes: 0.5, no: 0 },
      unpasteurizedDairy: { yes: 0.4, no: 0 },
      maternalMalnutrition: { yes: 0.3, no: 0 },
      preExistingInfections: { yes: 0.4, no: 0 },
      gestationalDiabetes: { yes: 0.3, no: 0 },
      immunosuppressiveDrugs: { yes: 0.5, no: 0 },
      longTermAntibiotics: { yes: 0.4, no: 0 },
      corticosteroids: { yes: 0.3, no: 0 },
      placentalInsufficiency: { yes: 0.4, no: 0 },
      pretermLabor: { yes: 0.3, no: 0 },
      multiplePregnancies: { yes: 0.4, no: 0 },
    };

    let ocularRiskScore = 0;
    let congenitalRiskScore = 0;

    Object.keys(formData).forEach((key) => {
      if (weights[key]) {
        const formValue = formData[key as keyof FormData];
        if (Array.isArray(formValue)) {
          formValue.forEach((value) => {
            ocularRiskScore += weights[key][value] || 0;
            congenitalRiskScore += weights[key][value] || 0;
          });
        } else {
          ocularRiskScore += weights[key][formValue as string] || 0;
          congenitalRiskScore += weights[key][formValue as string] || 0;
        }
      }
    });

    return { ocularRiskScore, congenitalRiskScore };
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isFormValid()) {
      const { ocularRiskScore, congenitalRiskScore } =
        calculateRiskScores(formData);
      setOcularRiskScore(ocularRiskScore);
      setCongenitalRiskScore(congenitalRiskScore);
      setShowForm(false);
      if (isPregnant) {
        setShowCongenitalPrediction(true);
      }
    }
  };

  const OcularToxoplasmosisChart = ({
    ocularRiskScore,
  }: {
    ocularRiskScore: number;
  }) => {
    const data: ChartData<"line"> = {
      labels: ["Initial", "1 Month", "3 Months", "6 Months", "1 Year"],
      datasets: [
        {
          label: "Ocular Toxoplasmosis Progression",
          data: [
            ocularRiskScore,
            ocularRiskScore * 1.2,
            ocularRiskScore * 1.5,
            ocularRiskScore * 1.8,
            ocularRiskScore * 2,
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          tension: 0.1,
        },
      ],
    };

    const options: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Ocular Toxoplasmosis Progression",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const analysis = (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <p style={{ color: "black" }}>
          <strong>Analysis:</strong> The progression of ocular toxoplasmosis is
          influenced by several factors:
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Immune Conditions
          </span>
          : Conditions like {formData.immuneCondition.join(", ")} weaken the
          immune system, leading to faster progression.
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Raw Meat Consumption
          </span>
          :{" "}
          {formData.rawMeatConsumption === "yes"
            ? "Consuming raw meat increases the risk."
            : "Avoiding raw meat reduces the risk."}
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Cat Exposure</span>
          :{" "}
          {formData.catExposure === "yes"
            ? "Exposure to cats increases the risk."
            : "No exposure to cats reduces the risk."}
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Age Group</span>:
          Being in the {formData.ageGroup} age group affects the progression
          rate.
          <br />
          <strong>Normal Range:</strong> A score below{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>1.0</span>{" "}
          indicates low risk, while scores above{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>2.0</span> indicate
          high risk.
        </p>
      </div>
    );

    return (
      <div style={{ height: "300px", width: "100%", marginBottom: "40px" }}>
        <Line data={data} options={options} />
        {analysis}
      </div>
    );
  };

  const CongenitalToxoplasmosisChart = ({
    congenitalRiskScore,
  }: {
    congenitalRiskScore: number;
  }) => {
    // Determine risk level and percentage
    let riskLevel: string;
    let riskPercentage: number;

    if (congenitalRiskScore < 0.5) {
      riskLevel = "Low Risk";
      riskPercentage = (1 - congenitalRiskScore) * 100;
    } else if (congenitalRiskScore >= 0.5 && congenitalRiskScore < 1.0) {
      riskLevel = "Medium Risk";
      riskPercentage = congenitalRiskScore * 100;
    } else {
      riskLevel = "High Risk";
      riskPercentage = congenitalRiskScore * 100;
    }

    const data: ChartData<"bar"> = {
      labels: [riskLevel],
      datasets: [
        {
          label: "Congenital Toxoplasmosis Risk",
          data: [riskPercentage],
          backgroundColor:
            riskLevel === "Low Risk"
              ? "rgba(75, 192, 192, 0.2)"
              : riskLevel === "Medium Risk"
              ? "rgba(255, 206, 86, 0.2)"
              : "rgba(255, 99, 132, 0.2)",
          borderColor:
            riskLevel === "Low Risk"
              ? "rgba(75, 192, 192, 1)"
              : riskLevel === "Medium Risk"
              ? "rgba(255, 206, 86, 1)"
              : "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Congenital Toxoplasmosis Risk Prediction",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    };

    const analysis = (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <p style={{ color: "black" }}>
          <strong>Analysis:</strong> The risk of congenital toxoplasmosis is
          influenced by:
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Pregnancy Status
          </span>
          :{" "}
          {formData.pregnancyStatus === "pregnant"
            ? "Being pregnant increases the risk."
            : "Not being pregnant reduces the risk."}
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Trimester</span>:{" "}
          {formData.trimester
            ? `Being in the ${formData.trimester} trimester affects the risk.`
            : ""}
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Immune Conditions
          </span>
          : Conditions like {formData.immuneCondition.join(", ")} weaken the
          immune system, increasing the risk.
          <br />-{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Previous Toxoplasmosis
          </span>
          :{" "}
          {formData.previousToxoplasmosis === "yes"
            ? "Previous infection increases the risk."
            : "No previous infection reduces the risk."}
          <br />
          <strong>Normal Range:</strong> A score below{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>0.5</span>{" "}
          indicates low risk, scores between{" "}
          <span style={{ color: "orange", fontWeight: "bold" }}>
            0.5 and 1.0
          </span>{" "}
          indicate medium risk, and scores above{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>1.0</span> indicate
          high risk.
        </p>
      </div>
    );

    const suggestions = (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <p style={{ color: "black" }}>
          <strong>Suggestions:</strong>
          <br />-{" "}
          {formData.immuneCondition.includes("None")
            ? "Since you have no immune conditions, the risk of progression is reduced. Maintain a healthy lifestyle and regular check-ups."
            : "Given your immune conditions, it is crucial to follow medical advice strictly. Avoid raw meat, unpasteurized dairy, and contact with cats."}
          <br />-{" "}
          {formData.pregnancyStatus === "pregnant"
            ? "If pregnant, ensure regular prenatal check-ups and follow your doctor's advice to minimize risks to the fetus."
            : "If planning pregnancy, consult your doctor for pre-pregnancy counseling."}
        </p>
      </div>
    );

    return (
      <div style={{ height: "300px", width: "100%", marginBottom: "40px" }}>
        <Bar data={data} options={options} />
        {analysis}
        {suggestions}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#E0F7FA",
        padding: "20px",
      }}
    >
      <Card
        ref={componentRef}
        className="p-4"
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#FAFAFA",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(31, 41, 55, 0.5)",
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        {!showForm && ocularRiskScore === null && (
          <>
            <h2
              className="text-center"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              ⚠️ Ocular Toxoplasmosis Detected
            </h2>
            <p
              className="text-center fs-4"
              style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Please fill in your immunity details to get Progression details of
              Ocular Toxoplasmosis.
            </p>
            <div className="text-center">
              <Button
                variant="danger"
                onClick={handleAgreeClick}
                className="w-50 my-3"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Yes, I agree !
              </Button>
            </div>
          </>
        )}

        {showForm && (
          <Form onSubmit={handleSubmit}>
            {/* Rest of your form JSX remains the same */}
            {/* ... */}
          </Form>
        )}

        {ocularRiskScore !== null && (
          <>
            <OcularToxoplasmosisChart ocularRiskScore={ocularRiskScore} />
            <div style={{ marginBottom: "40px" }}></div>
          </>
        )}

        {showCongenitalPrediction && congenitalRiskScore !== null && (
          <>
            <div style={{ marginTop: "40px" }}></div>
            <CongenitalToxoplasmosisChart
              congenitalRiskScore={congenitalRiskScore}
            />
          </>
        )}

        {(ocularRiskScore !== null || congenitalRiskScore !== null) && (
          <div
            className="text-center no-print"
            style={{ marginBottom: "20px" }}
          >
            {/* <Button
              variant="info"
              onClick={handlePrint}
              style={{ fontWeight: "bold" }}
            >
              Print Report
            </Button> */}
          </div>
        )}
      </Card>
    </div>
  );
}
