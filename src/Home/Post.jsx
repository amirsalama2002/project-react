import React, { useState } from 'react';

const Post = () => {
  // تعريف الحالة لتخزين القيم المدخلة
  const [image, setImage] = useState(null); // لتخزين الصورة
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [response, setResponse] = useState(null); // لتخزين استجابة الـ API
  const [error, setError] = useState(null); // لتخزين الأخطاء إن وجدت
  const [loading, setLoading] = useState(false); // حالة التحميل

  // دالة لإرسال البيانات عبر POST إلى الـ API
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج

    setLoading(true); // تفعيل حالة التحميل
    setError(null); // إعادة تعيين الخطأ السابق
    setResponse(null); // إعادة تعيين الاستجابة السابقة

    try {
      // إنشاء كائن FormData لإرسال البيانات كـ multipart/form-data
      const formData = new FormData();
      formData.append('image', image); // إضافة الصورة
      formData.append('name', name);
      formData.append('email', email);
      formData.append('title', title);
      formData.append('phone', phone);
      formData.append('specialization', specialization);

      // إرسال الطلب إلى الـ API
      const apiUrl = 'http://127.0.0.1:8000/api/store'; // استبدل بهذا الـ URL الخاص بك
      const response = await fetch(apiUrl, {
        method: 'POST', // تحديد نوع الطلب (POST)
        body: formData, // إرسال البيانات باستخدام FormData
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const data = await response.json();
      setResponse(data); // تخزين الاستجابة في الحالة
    } catch (error) {
      setError(error.message); // تخزين الخطأ إذا حدث
    } finally {
      setLoading(false); // إيقاف حالة التحميل
    }
  };

  return (
    <div>
      <h1>Submit Your Data</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // تحديث القيمة عند التغيير
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // تحديث القيمة عند التغيير
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // تحديث القيمة عند التغيير
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // تحديث القيمة عند التغيير
            required
          />
        </div>
        <div>
          <label>Specialization:</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)} // تحديث القيمة عند التغيير
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])} // حفظ الملف الذي تم اختياره
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* عرض الأخطاء */}
      {response && <p>Response from API: {JSON.stringify("Think you ")}</p>} عرض الاستجابة
    </div>
  );
};

export default Post;
