import { useState } from 'react';

export default function ImageUpload({ onResult }) {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!image1 || !image2) return alert("Please upload both images.");

    const formData = new FormData();
    formData.append("image1", image1);
    formData.append("image2", image2);

    setLoading(true);
    const response = await fetch("http://127.0.0.1:5000/compare", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    onResult(result.similarity);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid text-black grid-cols-2 gap-4">
        <input type="file"  onChange={e => setImage1(e.target.files[0])} />
        <input type="file" onChange={e => setImage2(e.target.files[0])} />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {loading ? "Comparing..." : "Get Similarity Score"}
      </button>
    </div>
  );
}
