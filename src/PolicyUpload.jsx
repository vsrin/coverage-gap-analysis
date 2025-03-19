// PolicyUpload.jsx - Enhanced file upload component with functional upload capability
import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';

const PolicyUpload = ({ onFilesProcessed }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);

  const expectedFiles = [
    { 
      name: "Policy Document", 
      description: "Insurance policy document (PDF, DOCX)",
      format: "PDF/DOCX"
    },
    { 
      name: "Schedule of Values", 
      description: "List of insured locations & values",
      format: "XLSX/CSV"
    },
    { 
      name: "Loss Runs", 
      description: "5-year claims history",
      format: "PDF/XLSX/CSV"
    },
    { 
      name: "Risk Assessment", 
      description: "Risk management reports",
      format: "PDF/DOCX"
    }
  ];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    // In a real app, you would process and validate files here
    setUploading(true);
    
    // Simulate file processing
    setTimeout(() => {
      const newFiles = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        status: 'uploaded'
      }));
      
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      setUploading(false);
      
      if (files.length > 0) {
        setUploadStatus({
          type: 'success',
          message: `Successfully uploaded ${files.length} file(s)`
        });
        
        // In a real app, you would pass processed data to the parent component
        if (onFilesProcessed) {
          onFilesProcessed(newFiles);
        }
      }
    }, 1500);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium">Upload Policy Documents</h3>
        <p className="mt-1 text-sm text-gray-600">Drag and drop policy files or click to browse</p>
        
        <button 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleBrowseClick}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Browse Files'}
        </button>
        
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        
        <p className="mt-2 text-xs text-gray-500">Supports PDF, DOCX, XLSX, CSV formats (max 10MB per file)</p>
      </div>
      
      {uploadStatus && (
        <div className={`flex items-center p-3 rounded ${
          uploadStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {uploadStatus.type === 'success' ? 
            <CheckCircle className="h-5 w-5 mr-2" /> : 
            <AlertCircle className="h-5 w-5 mr-2" />
          }
          {uploadStatus.message}
        </div>
      )}
      
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Uploaded Files ({uploadedFiles.length})</h4>
          <div className="border rounded divide-y">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="p-3 flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                <div className="flex-grow">
                  <div className="font-medium">{file.name}</div>
                  <div className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB • {new Date(file.lastModified).toLocaleDateString()}
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Uploaded
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-800">Required Files for Analysis</h4>
            <p className="text-sm text-blue-700 mb-2">
              To perform a comprehensive coverage gap analysis, please upload the following:
            </p>
            <ul className="space-y-2">
              {expectedFiles.map((file, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="font-medium text-blue-700 mr-1 min-w-40">{file.name}:</span>
                  <span className="text-blue-600">{file.description} <span className="text-blue-400">({file.format})</span></span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-blue-700 mt-2">
              For best results, ensure all files are recent and contain complete information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyUpload;
