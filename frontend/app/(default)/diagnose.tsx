// // "use client"; // Keep this at the top

// // import { useState } from "react";

// // import PageIllustration from "@/components/page-illustration";
// // import Hero from "@/components/hero-home";
// // import Workflows from "@/components/workflows";
// // import Features from "@/components/features";
// // import Testimonials from "@/components/testimonials";
// // import Cta from "@/components/cta";

// // export default function Home() {
// //   const [prediction, setPrediction] = useState<string | null>(null);

// //   const handlePredict = async () => {
// //     try {
// //       const response = await fetch("/api/predict", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ imageUrl: "your_image_url_here" }), // Replace with actual image URL or image data
// //       });

// //       const data = await response.json();
// //       setPrediction(data.prediction); // 'Healthy' or 'Diseased'
// //     } catch (error) {
// //       console.error("Error during prediction:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <PageIllustration />

// //       <div>
// //         <button onClick={handlePredict}>Predict Eye Condition</button>
// //         {prediction && <p>Prediction: {prediction}</p>}
// //       </div>
// //     </>
// //   );
// // }

// // //2
// // "use client"; // Add this line at the very top

// // import { useState } from "react";

// // export default function Home() {
// //   const [prediction, setPrediction] = useState<string | null>(null);
// //   const [selectedFile, setSelectedFile] = useState<File | null>(null);

// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files && event.target.files[0]) {
// //       setSelectedFile(event.target.files[0]);
// //     }
// //   };

// //   const handlePredict = async () => {
// //     if (!selectedFile) {
// //       alert("Please select an image file first.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("image", selectedFile);

// //     try {
// //       const response = await fetch("/api/predict", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await response.json();
// //       setPrediction(data.prediction);
// //     } catch (error) {
// //       console.error("Error during prediction:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Predict Eye Condition</h1>
// //       <input type="file" onChange={handleFileChange} />
// //       <button onClick={handlePredict}>Predict</button>
// //       {prediction && <div>Prediction: {prediction}</div>}
// //     </div>
// //   );
// // }"use client"; // Mark this as a Client Component

// // "use client"; // Mark this as a Client Component

// // import { useState } from "react";

// // export default function Home() {
// //   const [prediction, setPrediction] = useState<string | null>(null);

// //   // Handle file selection and prediction
// //   const handleFileUpload = async () => {
// //     // Create a hidden file input element programmatically
// //     const fileInput = document.createElement("input");
// //     fileInput.type = "file";
// //     fileInput.accept = "image/*"; // Restrict to image files

// //     fileInput.onchange = async (event: Event) => {
// //       const input = event.target as HTMLInputElement;

// //       if (input.files && input.files[0]) {
// //         const selectedFile = input.files[0];
// //         const formData = new FormData();
// //         formData.append("image", selectedFile);
// //         console.log(formData);
// //         try {
// //           // Send file to the backend for prediction
// //           const response = await fetch("http://127.0.0.1:3002/api/predict", {
// //             method: "POST",
// //             body: formData,
// //           });
// //           console.log(response);
// //           if (!response.ok) {
// //             throw new Error("Failed to fetch prediction");
// //           }

// //           const data = await response.json();
// //           setPrediction(data.prediction); // Set prediction result
// //         } catch (error) {
// //           console.error("Error during prediction:", error);
// //           alert("An error occurred while predicting. Please try again.");
// //         }
// //       }
// //     };

// //     // Trigger the hidden file input
// //     fileInput.click();
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h1>Ocular Toxoplasmosis Prediction</h1>
// //       <button
// //         onClick={handleFileUpload}
// //         style={{
// //           padding: "10px 20px",
// //           fontSize: "16px",
// //           cursor: "pointer",
// //           backgroundColor: "#007bff",
// //           color: "#fff",
// //           border: "none",
// //           borderRadius: "5px",
// //         }}
// //       >
// //         Check Ocular Toxoplasmosis Prediction
// //       </button>
// //       {prediction && (
// //         <div style={{ marginTop: "20px", fontSize: "18px" }}>
// //           <strong>Prediction Result:</strong> {prediction}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client"; // Mark this as a Client Component

// // import { useState } from "react";

// // export default function Home() {
// //   const [prediction, setPrediction] = useState<string | null>(null);
// //   const [imagePath, setImagePath] = useState<string | null>(null); // State for the uploaded image path

// //   // Handle file selection and prediction
// //   const handleFileUpload = async () => {
// //     // Create a hidden file input element programmatically
// //     const fileInput = document.createElement("input");
// //     fileInput.type = "file";
// //     fileInput.accept = "image/*"; // Restrict to image files

// //     fileInput.onchange = async (event: Event) => {
// //       const input = event.target as HTMLInputElement;

// //       if (input.files && input.files[0]) {
// //         const selectedFile = input.files[0];
// //         const formData = new FormData();
// //         formData.append("image", selectedFile);
// //         console.log("FormData:", formData);

// //         try {
// //           // Send file to the backend for prediction
// //           const response = await fetch("http://127.0.0.1:3002/api/predict", {
// //             method: "POST",
// //             body: formData,
// //           });

// //           console.log("Response:", response);

// //           if (!response.ok) {
// //             throw new Error("Failed to fetch prediction");
// //           }

// //           const data = await response.json();
// //           console.log("Response Data:", data);

// //           setPrediction(data.prediction); // Set prediction result
// //           //  setImagePath(data.image_path); // Set image path for display
// //           setImagePath(`http://localhost:3002/uploads/${data.image_path}`); // Set image path for displaying
// //         } catch (error) {
// //           console.error("Error during prediction:", error);
// //           alert("An error occurred while predicting. Please try again.");
// //         }
// //       }
// //     };
// //     console.log(imagePath);
// //     // Trigger the hidden file input
// //     fileInput.click();
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h1>Ocular Toxoplasmosis Prediction</h1>
// //       <button
// //         onClick={handleFileUpload}
// //         style={{
// //           padding: "10px 20px",
// //           fontSize: "16px",
// //           cursor: "pointer",
// //           backgroundColor: "#007bff",
// //           color: "#fff",
// //           border: "none",
// //           borderRadius: "5px",
// //         }}
// //       >
// //         Check Ocular Toxoplasmosis Prediction
// //       </button>
// //       //{" "}

// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           height: "100vh", // Full viewport height
// //           textAlign: "center",
// //         }}
// //       >
// //         {prediction && (
// //           <div
// //             style={{
// //               fontSize: "18px",
// //               color: prediction === "Diseased" ? "red" : "green",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "10px",
// //             }}
// //           >
// //             <strong>Prediction Result:</strong>
// //             {prediction === "Diseased" ? (
// //               <>
// //                 <span role="img" aria-label="danger">
// //                   ⚠️
// //                 </span>{" "}
// //                 <span>{prediction}</span>
// //               </>
// //             ) : (
// //               <>
// //                 <span role="img" aria-label="success">
// //                   ✅
// //                 </span>{" "}
// //                 <span>{prediction}</span>
// //               </>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// "use client"; // Mark this as a Client Component

// import { useState } from "react";

// export default function Home() {
//   const [prediction, setPrediction] = useState<string | null>(null);
//   const [imagePath, setImagePath] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false); // New state for loading

//   const handleFileUpload = async () => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";

//     fileInput.onchange = async (event: Event) => {
//       const input = event.target as HTMLInputElement;

//       if (input.files && input.files[0]) {
//         const selectedFile = input.files[0];
//         const formData = new FormData();
//         formData.append("image", selectedFile);

//         setLoading(true); // Set loading to true while waiting for the server response
//         setPrediction(null); // Clear any previous predictions

//         try {
//           const response = await fetch("http://127.0.0.1:3002/api/predict", {
//             method: "POST",
//             body: formData,
//           });

//           if (!response.ok) {
//             throw new Error("Failed to fetch prediction");
//           }

//           const data = await response.json();
//           setPrediction(data.prediction);
//           setImagePath(`http://localhost:3002/uploads/${data.image_path}`);
//         } catch (error) {
//           console.error("Error during prediction:", error);
//           alert("An error occurred while predicting. Please try again.");
//         } finally {
//           setLoading(false); // Set loading to false when the process completes
//         }
//       }
//     };

//     fileInput.click();
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "50px 20px" }}>
//       {/* Heading */}
//       <h1
//         style={{
//           fontSize: "32px",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           color: "#ffffff",
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//         }}
//       >
//         Ocular Toxoplasmosis Prediction
//       </h1>

//       {/* Button */}
//       <button
//         onClick={handleFileUpload}
//         style={{
//           padding: "12px 24px",
//           fontSize: "18px",
//           fontWeight: "bold",
//           cursor: "pointer",
//           backgroundColor: "rgb(17 13 166)",
//           color: "#fff",
//           border: "2px solid transparent",
//           borderRadius: "15px",
//           transition: "all 0.3s ease",
//           boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
//         }}
//         onMouseOver={(e) => {
//           const target = e.target as HTMLButtonElement;
//           target.style.backgroundColor = "#0056b3";
//           target.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.8)";
//         }}
//         onMouseOut={(e) => {
//           const target = e.target as HTMLButtonElement;
//           target.style.backgroundColor = "rgb(17 13 166)";
//           target.style.boxShadow = "0 0 0 rgba(255, 255, 255, 0)";
//         }}
//         onMouseDown={(e) => {
//           const target = e.target as HTMLButtonElement;
//           target.style.border = "2px solid white";
//         }}
//         onMouseUp={(e) => {
//           const target = e.target as HTMLButtonElement;
//           target.style.border = "2px solid transparent";
//         }}
//       >
//         Upload Image for Ocular Toxoplasmosis Diagnosis
//       </button>

//       {/* Loading Spinner */}
//       {loading && (
//         <div style={{ marginTop: "30px" }}>
//           <div
//             style={{
//               width: "40px",
//               height: "40px",
//               border: "4px solid rgba(255, 255, 255, 0.3)",
//               borderTop: "4px solid #ffffff",
//               borderRadius: "50%",
//               animation: "spin 1s linear infinite",
//               margin: "0 auto",
//             }}
//           ></div>
//           <p
//             style={{
//               marginTop: "10px",
//               fontSize: "18px",
//               color: "#ffffff",
//               fontWeight: "bold",
//             }}
//           >
//             Diagnosing your results...
//           </p>
//         </div>
//       )}

//       {/* Prediction Result */}
//       {prediction && !loading && (
//         <div
//           style={{
//             marginTop: "30px",
//             fontSize: "20px",
//             color: prediction === "Diseased" ? "red" : "green",
//             fontWeight: "bold",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           {prediction === "Diseased" ? (
//             <>
//               <span role="img" aria-label="danger">
//                 ⚠️
//               </span>
//               <span>{`Prediction Result: ${prediction}`}</span>
//             </>
//           ) : (
//             <>
//               <span role="img" aria-label="success">
//                 ✅
//               </span>
//               <span>{`Prediction Result: ${prediction}`}</span>
//             </>
//           )}
//         </div>
//       )}

//       {/* Spinner Animation CSS */}
//       <style jsx>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
"use client"; // Mark this as a Client Component

import { useState } from "react";

export default function Home() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<string | null>(null); // Added confidence state
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New state for loading

  const handleFileUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = async (event: Event) => {
      const input = event.target as HTMLInputElement;

      if (input.files && input.files[0]) {
        const selectedFile = input.files[0];
        const formData = new FormData();
        formData.append("image", selectedFile);

        setLoading(true); // Set loading to true while waiting for the server response
        setPrediction(null); // Clear any previous predictions
        setConfidence(null); // Clear confidence state

        try {
          const response = await fetch("http://127.0.0.1:3002/api/predict", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to fetch prediction");
          }

          const data = await response.json();
          setPrediction(data.prediction);
          setConfidence(data.confidence); // Set confidence value from the response
          setImagePath(`http://localhost:3002/uploads/${data.image_path}`);
        } catch (error) {
          console.error("Error during prediction:", error);
          alert("An error occurred while predicting. Please try again.");
        } finally {
          setLoading(false); // Set loading to false when the process completes
        }
      }
    };

    fileInput.click();
  };

  // Function to get the text color and icon based on the prediction
  const getPredictionDetails = (prediction: string | null) => {
    switch (prediction) {
      case "Healthy":
        return { color: "greenyellow", icon: "✅", message: "Healthy" };
      case "Ocular Toxoplasmosis":
        return {
          color: "red",
          icon: "⚠️",
          message: "Ocular Toxoplasmosis Positive",
        };
      case "Other Retinal Disease":
        return {
          color: "yellow",
          icon: "🦠",
          message: "Other Retinal Disease",
        };
      default:
        return {
          color: "white",
          icon: "",
          message: prediction || "No Prediction",
        };
    }
  };

  const { color, icon, message } = getPredictionDetails(prediction);

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      {/* Heading */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#ffffff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        Ocular Toxoplasmosis Prediction
      </h1>

      {/* Button */}
      <button
        onClick={handleFileUpload}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "rgb(17 13 166)",
          color: "#fff",
          border: "2px solid transparent",
          borderRadius: "15px",
          transition: "all 0.3s ease",
          boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = "#0056b3";
          target.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.8)";
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = "rgb(17 13 166)";
          target.style.boxShadow = "0 0 0 rgba(255, 255, 255, 0)";
        }}
        onMouseDown={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.border = "2px solid white";
        }}
        onMouseUp={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.border = "2px solid transparent";
        }}
      >
        Upload Image for Ocular Toxoplasmosis Diagnosis
      </button>

      {/* Loading Spinner */}
      {loading && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid rgba(255, 255, 255, 0.3)",
              borderTop: "4px solid",
              borderRadius: "50%",
              animation:
                "spin 1s linear infinite, colorChange 3s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <p
            style={{
              marginTop: "10px",
              fontSize: "18px",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Diagnosing your results...
          </p>
        </div>
      )}

      {/* Prediction Result */}
      {prediction && !loading && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <div
            style={{
              color: color,
              fontSize: "24px",
              fontWeight: "bold",
              display: "inline-block",
              textAlign: "center",
              width: "auto",
              margin: "10px auto",

              background:
                "linear-gradient(150deg, rgb(83 91 107 / 60%), rgb(86 110 154 / 60%))",
              padding: "10px 20px",
              borderRadius: "20px", // Rounded borders
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2>
              {message} {icon}
            </h2>
            <h3>Confidence: {confidence}</h3>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes colorChange {
          0% {
            border-top-color: red;
          }
          33% {
            border-top-color: yellow;
          }
          66% {
            border-top-color: green;
          }
          100% {
            border-top-color: red;
          }
        }
      `}</style>
    </div>
  );
}
