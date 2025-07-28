
"use client"
import Head from 'next/head';
import ImageUpload from '@/component/ImageUpload';
import { useState } from 'react';
export default function Home() {
    const [similarity, setSimilarity] = useState(null);
  return (
 <>
      <Head>
        <title>Image Similarity Checker</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full space-y-6">
          <h1 className="text-2xl font-bold text-center text-black">Image Similarity</h1>
          <ImageUpload onResult={setSimilarity} />
          {similarity !== null && (
            <div className="text-center">
              <p className="text-lg font-medium text-black">Similarity Score:</p>
              <p className="text-3xl font-bold text-blue-600">{similarity.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
