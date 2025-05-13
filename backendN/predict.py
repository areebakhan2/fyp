



# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# import numpy as np
# import sys



# import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Suppress TensorFlow info and warning logs

# # Force UTF-8 encoding for stdout and stderr
# sys.stdout.reconfigure(encoding='utf-8')
# sys.stderr.reconfigure(encoding='utf-8')

# # Load the trained model (update the path if necessary)
# model = load_model('model/model.h5')  # Adjust the path to your model

# # The image path passed via the command line argument
# image_path = sys.argv[1]

# # Load and preprocess the image
# image = load_img(image_path, target_size=(299, 299))  # Resize to match model input size
# img_array = img_to_array(image)
# img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image data

# # Make a prediction
# prediction = model.predict(img_array)

# # Interpret and print the result (assuming binary classification)
# result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"

# print(f"Prediction result for {image_path}: {result}")









# import os
# import sys
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# import numpy as np

# # Suppress TensorFlow logs
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

# # Configure UTF-8 output
# sys.stdout.reconfigure(encoding='utf-8')
# sys.stderr.reconfigure(encoding='utf-8')

# # Load the model
# try:
#     model_path = 'model/model.h5'  # Update this path if your model is saved elsewhere
#     model = load_model(model_path)
#     print("Model loaded successfully!")
#     print("Model input shape:", model.input_shape)
# except Exception as e:
#     print(f"Error loading model: {e}")
#     sys.exit(1)

# # Ensure an image path is provided
# if len(sys.argv) < 2:
#     print("Error: No image path provided.")
#     sys.exit(1)

# # Get the image path from the command-line argument
# image_path = sys.argv[1]

# # Validate if the image file exists
# if not os.path.exists(image_path):
#     print(f"Error: File not found: {image_path}")
#     sys.exit(1)

# try:
#     # Load and preprocess the image
#     image = load_img(image_path, target_size=(299, 299))  # Match model's input size
#     img_array = img_to_array(image)
#     img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image data

#     # Make a prediction
#     prediction = model.predict(img_array)
#     print("Raw prediction output:", prediction)

#     # Interpret and print the result (binary classification)
#     result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"
#     print(f"Prediction result for {image_path}: {result}")

#     # Return the result to stdout
#     sys.stdout.write(result)

# except Exception as e:
#     print(f"Error during prediction: {e}")
#     sys.exit(1)





# import os
# import sys
# import numpy as np
# import tensorflow as tf
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array

# # Suppress TensorFlow logs
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# # Configure UTF-8 output
# sys.stdout.reconfigure(encoding='utf-8')
# sys.stderr.reconfigure(encoding='utf-8')

# # Load the .h5 model
# try:
#     model_path = 'model/model.h5'  # Ensure this path points to the correct location of your .h5 model
#     model = load_model(model_path)
#     print("Model loaded successfully!")
#     print("Model input shape:", model.input_shape)
# except Exception as e:
#     print(f"Error loading model: {e}")
#     sys.exit(1)

# # Ensure an image path is provided
# if len(sys.argv) < 2:
#     print("Error: No image path provided.")
#     sys.exit(1)

# # Get the image path from the command-line argument
# image_path = sys.argv[1]

# # Validate if the image file exists
# if not os.path.exists(image_path):
#     print(f"Error: File not found: {image_path}")
#     sys.exit(1)

# try:
#     # Load and preprocess the image
#     image = load_img(image_path, target_size=(299, 299))  # Match model's input size
#     img_array = img_to_array(image)
#     img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image data
#     model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

#     # Make a prediction using the loaded model
#     prediction = model.predict(img_array)
#     print("Raw prediction output:", prediction)

#     # Interpret and print the result (binary classification)
#     result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"
#     print(f"Prediction result for {image_path}: {result}")
   
#     # Return the result to stdout
#     sys.stdout.write(result)

# except Exception as e:
#     print(f"Error during prediction: {e}")
#     sys.exit(1)



# import os
# import sys
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# import json
# # Suppress TensorFlow logs
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# # Ensure UTF-8 encoding for stdout and stderr
# sys.stdout.reconfigure(encoding='utf-8')
# sys.stderr.reconfigure(encoding='utf-8')

# # Load the trained model
# try:
#     model_path = 'model/model.h5'  # Ensure this path is correct
#     model = load_model(model_path)
   
#     print("Model loaded successfully!")
# except Exception as e:
#     print(f"Error loading model: {e}")
#     sys.exit(1)

# # Validate the command-line arguments
# if len(sys.argv) < 2:
#     print("Error: No image path provided.")
#     sys.exit(1)

# image_path = sys.argv[1]

# # Validate the image file path
# if not os.path.exists(image_path):
#     print(f"Error: File not found: {image_path}")
#     sys.exit(1)

# try:
#     # Preprocess the image
#     image = load_img(image_path, target_size=(299, 299))  # Adjust input size if necessary
#     img_array = img_to_array(image)
#     img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize

#     # Make a prediction
#     prediction = model.predict(img_array)
#     print(f"Raw prediction output: {prediction}")

#     # Interpret the result
#     result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"
#     print(f"Prediction result for {image_path}: {result}")
    
#     # Send result to stdout
#     sys.stdout.write(result)


# except Exception as e:
#     print(f"Error during prediction: {e}")
#     sys.exit(1)













# import sys
# import json
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array
# import os
# import tensorflow as tf
# tf.get_logger().setLevel('ERROR')
# os.environ["PYTHONIOENCODING"] = "utf-8"

# # Suppress TensorFlow logs
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# # Load the trained model
# try:
#     model_path = 'model/model.h5'  # Update this path as needed
#     model = load_model(model_path)
#     print("Model found.")
# except Exception as e:
#     print(json.dumps({"error": f"Error loading model: {e}"}))
#     sys.exit(1)

# # Validate the command-line arguments
# if len(sys.argv) < 2:
#     print(json.dumps({"error": "No image path provided."}))
#     sys.exit(1)

# image_path = sys.argv[1]
# print(f"Receiveddddddddd image path: {image_path}")
# # Validate the image file path
# if not os.path.exists(image_path):
#     print(json.dumps({"error": f"File not found: {image_path}"}))
#     sys.exit(1)

# try:
#     # Preprocess the image
#     print("enterrrrrrrrrrrrrrrrrrrr")
#     image = load_img(image_path, target_size=(299, 299))  # Adjust input size if necessary
#     img_array = img_to_array(image)
#     img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize
#     print(f"Receiveddddddddd image {image}")
#     print(f"Receiveddddddddd image array {img_array}")
#     # Make a prediction
#     try:
#         # prediction = model.predict(img_array)
#         # print(f"Receiveddddddddd prediction {prediction}")
#         prediction = model.predict(img_array, verbose=0)
#         print(f"Receiveddddddddd prediction {prediction}")

#     except Exception as e:
#         print(f"Error occurred: {e}")

#     # Interpret the result
#     result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"
 
#     # Send JSON result
#     output_data = {
#         "image_path": image_path,
#         "prediction": result,
#     }
#     print(f"Prediction completed successfully. More info: {json.dumps(output_data, ensure_ascii=False)}")
#     output_file = image_path + ".json"
#     with open(output_file, "w", encoding="utf-8") as f:  # Ensure indentation here is correct
#         json.dump(output_data, f, ensure_ascii=False)

#     # Print the result for server.js (optional, for debugging)
#     print(json.dumps(output_data))

# except Exception as e:
#     print(json.dumps({"error": f"Error during prediction: {e}, details: {repr(e)}"}))
#     sys.exit(1)





import sys
import json
import numpy as np
import cv2
import pytesseract
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import os
import tensorflow as tf

# Suppress TensorFlow and OS logs
tf.get_logger().setLevel('ERROR')
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
os.environ['PYTHONIOENCODING'] = 'utf-8'

# Load the trained model
try:
    model_path = 'model/mmodel.h5'  # Update this path as needed
    model = load_model(model_path)
    print("Model loaded successfully!")
except Exception as e:
    print(json.dumps({"error": f"Error loading model: {e}"}))
    sys.exit(1)

# Set image size based on model input
IMG_SIZE = (299, 299)

# Function to check for text in the image
def contains_text(img_path):
    img = cv2.imread(img_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray)
    return bool(text.strip())

# Function to check if the image resembles a retinal scan
def is_retinal_scan(img_path):
    img_cv = cv2.imread(img_path)
    img_gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
    img_resized = cv2.resize(img_gray, IMG_SIZE)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced_img = clahe.apply(img_resized)

    circles = cv2.HoughCircles(
        enhanced_img,
        cv2.HOUGH_GRADIENT,
        dp=1.5,
        minDist=50,
        param1=100,
        param2=30,
        minRadius=30,
        maxRadius=80
    )

    if circles is not None:
        img_center_x, img_center_y = img_resized.shape[1] // 2, img_resized.shape[0] // 2
        for x, y, r in np.round(circles[0, :]).astype("int"):
            distance_from_center = np.sqrt((x - img_center_x) ** 2 + (y - img_center_y) ** 2)
            if distance_from_center < img_resized.shape[1] * 0.3:
                return True
    return False

# Function to preprocess and resize image
def resize_image(img_path):
    img = load_img(img_path, target_size=IMG_SIZE)
    return img

# Function to predict the uploaded image
def predict_image(img_path):
    if contains_text(img_path):
        return "The uploaded image contains text, not a retinal scan.", 0

    if not is_retinal_scan(img_path):
        return "The uploaded image is not a valid retinal scan.", 0

    img = resize_image(img_path)
    img_array = np.expand_dims(img_to_array(img) / 255.0, axis=0)
    prediction = model.predict(img_array, verbose=0)[0]

    classes = ['Healthy', 'Ocular Toxoplasmosis', 'Other Retinal Disease']
    predicted_index = np.argmax(prediction)
    predicted_class = classes[predicted_index]
    confidence = prediction[predicted_index] * 100

    for cls, conf in zip(classes, prediction):
        print(f"{cls}: {conf * 100:.2f}%")

    return predicted_class, confidence

# Main execution
if len(sys.argv) < 2:
    print(json.dumps({"error": "No image path provided."}))
    sys.exit(1)

image_path = sys.argv[1]
if not os.path.exists(image_path):
    print(json.dumps({"error": f"File not found: {image_path}"}))
    sys.exit(1)

result, confidence = predict_image(image_path)
output_data = {
    "image_path": image_path,
    "prediction": result,
    "confidence": f"{confidence:.2f}%"
}

# Save prediction results to a file
output_file = image_path + ".json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False)

# Print the result for debugging/server usage
print(json.dumps(output_data))









# import os
# import sys
# import json
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import load_img, img_to_array

# # Suppress TensorFlow logs
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# # Load the trained model
# try:
#     model_path = 'model/model.h5'  # Update this path as needed
#     model = load_model(model_path)
# except Exception as e:
#     print(json.dumps({"error": f"Error loading model: {e}"}))
#     sys.exit(1)

# # Validate the command-line arguments
# if len(sys.argv) < 2:
#     print(json.dumps({"error": "No image path provided."}))
#     sys.exit(1)

# image_path = sys.argv[1]

# # Validate the image file path
# if not os.path.exists(image_path):
#     print(json.dumps({"error": f"File not found: {image_path}"}))
#     sys.exit(1)

# try:
#     # Preprocess the image
#     image = load_img(image_path, target_size=(299, 299))  # Adjust input size if necessary
#     img_array = img_to_array(image)
#     img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize

#     # Make a prediction
#     prediction = model.predict(img_array)
    
#     # Interpret the result
#     result = "Healthy" if prediction[0][0] <= 0.5 else "Diseased"

#     # Save the result to a JSON file
#     output_data = {
#         "image_path": image_path,
#         "prediction": result,
#     }
#     output_file = image_path + ".json"  # Save JSON file next to the image
#     with open(output_file, "w") as f:
#         json.dump(output_data, f)

#     # Print the result for server.js (optional, for debugging)
#     print(json.dumps(output_data))

# except Exception as e:
#     error_message = {"error": f"Error during prediction: {e}"}
#     print(json.dumps(error_message))
#     sys.exit(1)
