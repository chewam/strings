import { ChangeEvent, useEffect, useState } from "react";

const UploadField = ({
  required,
  onChange,
  placeholder,
}: {
  required?: boolean;
  placeholder: string;
  onChange?: (file: File | undefined) => void;
}) => {
  const [file, setFile] = useState<File>();

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    const uploadedFile = files && files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  useEffect(() => {
    if (onChange) onChange(file);
  }, [file, onChange]);

  return (
    <input
      type="file"
      required={required}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default UploadField;
