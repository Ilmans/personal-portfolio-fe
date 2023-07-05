"use client";
import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input";
import MarkdownForm from "./MarkdownForm";
import * as yup from "yup";
import { config } from "../../../helpers";
import { toast } from "react-toastify";

const validationSchema = yup.object().shape({
  name: yup.string().min(15).max(100).required(),
  stacks: yup.string().required(),
  description: yup.string().optional(),
  url: yup.string().required(),
  image: yup
    .mixed()
    .test("fileType", "Invalid file format", (value: any, context) => {
      if (!value) return true; // Allow empty value

      const supportedFormats = ["image/jpeg", "image/png", "image/gif"];
      return supportedFormats.includes(value.type);
    })
    .required(),
});

function FormProject() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    let tokenLog = localStorage.getItem("token");
    setToken(tokenLog);
  }, []);


  //
  const initialState = {
    stacks: "",
    name: "",
    description: "",
    image: null, // Menyimpan file gambar yang diunggah
    url: "",
  };
  const [errors, setErrors] = useState({ ...initialState });
  const [processing, setProcessing] = useState(false);
  const [project, setProject] = useState({ ...initialState });
  const [previewImage, setPreviewImage] = useState(null); // Menyimpan pratinjau gambar
  const [base64, setBase64] = useState("");
  const onChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String: any = reader.result;
        setBase64(base64String);
      };
      setProject({ ...project, image: file });
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = { ...project, image: base64 };
    validationSchema
      .validate(project, {
        abortEarly: false,
      })
      .then(() => {
        // Kirim data ke backend menggunakan fetch atau library HTTP lainnya
        const headers: any = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        fetch(config.BACKEND_URL + "/projects", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if ("errors" in data) {
              alert(data.errors);
              return;
            }
            toast.success("Project created successfully");
          })
          .catch((error) => {
            throw new Error(error);
          });
      })
      .catch((err) => {
        // Validasi gagal, tangkap kesalahan dan perbarui state errors
        const newErrors: any = {};
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });

        setProcessing(false);
        setErrors(newErrors);
      });
  };

  return (
    <div className="w-full p-4 border rounded-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label className="mb-2 text-zinc-300" htmlFor="">
            Name
          </label>

          <Input
            value={project.name}
            name="name"
            onChange={onChange}
            type="text"
          />
          {errors.name && (
            <div className="text-xs text-red-900">{errors.name}</div>
          )}
        </div>
        <div className="flex items-center mt-4 form-group">
          <div className="w-2/3">
            <label htmlFor="">Image</label>
            <input
              name="image"
              className="w-full"
              type="file"
              onChange={onChange}
            />
          </div>
          <div className="flex items-center justify-center w-1/3 shadow-md">
            {previewImage && (
              <img
                height={200}
                width={400}
                src={previewImage}
                alt="Preview"
                style={{ maxWidth: "100%" }}
              />
            )}
          </div>
        </div>
        {errors.image && (
          <div className="text-xs text-red-900">{errors.image}</div>
        )}
        <div className="mt-4 form-group">
          <label className="mb-2 text-zinc-300" htmlFor="">
            Stacks
          </label>

          <Input
            value={project.stacks}
            name="stacks"
            onChange={onChange}
            type="text"
          />
          {errors.stacks && (
            <div className="text-xs text-red-900">{errors.stacks}</div>
          )}
        </div>
        <div className="mt-4 form-group">
          <label className="mb-2 text-zinc-300" htmlFor="">
            Url
          </label>

          <Input
            value={project.url}
            name="url"
            onChange={onChange}
            type="text"
          />
          {errors.url && (
            <div className="text-xs text-red-900">{errors.url}</div>
          )}
        </div>
        <div className="mt-4 form-group">
          <label className="mb-2 text-zinc-300" htmlFor="">
            Description
          </label>

          <MarkdownForm project={project} setProject={setProject} />
          {errors.description && (
            <div className="text-xs text-red-900">{errors.description}</div>
          )}
        </div>
        <div className="mt-4">
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
}

export default FormProject;
