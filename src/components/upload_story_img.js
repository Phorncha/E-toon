// upload_story_img.js
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../firebase.js';

// ฟังก์ชันสำหรับการอัปโหลดรูปภาพ
async function uploadImage(file) {
  const storageRef = ref(storage, 'img_story/' + file.name);

  try {
    // อัปโหลดไฟล์
    const snapshot = await uploadBytes(storageRef, file);

    // คืนค่า URL ของรูปภาพที่อัปโหลด
    const imageUrl = await getDownloadURL(snapshot.ref);

    // แสดงข้อความสถานะการอัปโหลดสำเร็จ
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.innerText = 'อัปโหลดรูปภาพสำเร็จ!';

    return imageUrl;
  } catch (error) {
    console.error('Error uploading file:', error);

    // แสดงข้อความสถานะการอัปโหลดล้มเหลว
    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.innerText = 'เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ';

    return null;
  }
}

// เรียกใช้ฟังก์ชัน uploadImage เมื่อมีการคลิกปุ่ม Upload
const uploadButton = document.getElementById('uploadButton');
uploadButton.addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    console.error('No file selected.');
    return;
  }

  uploadImage(file).then((imageUrl) => {
    if (imageUrl) {
      // แสดง URL ของรูปภาพที่อัปโหลด
      console.log('Uploaded a file!', imageUrl);

      // แสดงชื่อไฟล์ที่เลือกใน textbox
      const fileNameInput = document.getElementById('fileName');
      fileNameInput.value = file.name;

      // แสดงรูปภาพที่อัปโหลดในพื้นที่ของ imagePreview
      const imagePreview = document.getElementById('imagePreview');
      imagePreview.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;" />`;
    } else {
      // แสดงข้อความสถานะการอัปโหลดล้มเหลว
      const uploadStatus = document.getElementById('uploadStatus');
      uploadStatus.innerText = 'เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ';
    }
  });
});

export default uploadImage;
