"use client";

import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import logo2 from "../_images/logo2.svg";
import Image from "next/image";
import headerIcons from "../_images/headerIcons.svg";
import uploadIcon from "../_images/uploadIcon.svg";
import excelupload from "../_images/excelupload.svg";
import threeLines from "../_images/threeLines.svg";
import Spinner from "@/components/spinner";
import Table from "./_components/Table";
import Navbar from "./_components/Navbar";

const Upload = () => {
  const [objData, setObjData] = useState<any[]>([]);
  const [fileName, setFileName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else if (window.innerWidth > 640) {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSpinner(true);
    let file = e.target.files?.[0];
    setFileName(file?.name || "");
    let reader = new FileReader();
    if (file) {
      reader.readAsArrayBuffer(file);
    }

    reader.onload = (e) => {
      const wb = XLSX.read((e.target as FileReader).result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...(a as Object), selectedTags: [] };
        })
      );
      setShowSpinner(false);
    };
  };

  function onSelect(data: any, indx: number) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        if (prev[indx].selectedTags.includes(data)) return a;
        return i == indx
          ? { ...a, selectedTags: [...prev[indx].selectedTags, data] }
          : a;
      });
    });
  }

  function handleFilter(data: any, indx: number) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        let tempData = prev[indx].selectedTags.filter((a: any) => a != data);
        return i == indx ? { ...a, selectedTags: tempData } : a;
      });
    });
  }

  const menuToggle = () => setToggle(!toggle);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);

    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const wb = XLSX.read(e.target?.result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...(a as Object), selectedTags: [] };
        })
      );
      setShowSpinner(false);
    };
  }

  return (
    <div className="w-full min-h-screen flex relative">
      <Navbar toggle={toggle} menuToggle={menuToggle} isMobile={isMobile} />

      <div className="flex flex-col flex-1 px-6 overflow-hidden bg-[#fafafb]">
        <div className="flex items-center justify-between w-full h-24">
          <div className={isMobile ? "flex" : "hidden"}>
            <Image
              className={isMobile ? "flex" : "hidden"}
              style={{
                alignSelf: "center",
                marginRight: "1.5rem",
                cursor: "pointer",
              }}
              src={threeLines}
              onClick={menuToggle}
              alt="toggle"
            />
            <Image
              className={isMobile ? "flex" : "hidden"}
              style={{ alignSelf: "center" }}
              src={logo2}
              alt="logo2"
            />
          </div>
          <span
            className={
              isMobile ? "hidden" : "flex justify-self-start text-xl font-bold"
            }
          >
            Upload CSV
          </span>

          <div>
            <Image src={headerIcons} alt="headericons" />
          </div>
        </div>
        <div
          className={
            isMobile
              ? "w-full flex justify-center items-center flex-col flex-1"
              : "w-full flex justify-center items-center flex-col flex-1 flex-start"
          }
        >
          <span
            className={isMobile ? "flex" : "hidden"}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Upload CSV
          </span>
          <div className="flex flex-col mt-8 rounded-[10px] bg-white p-4 max-w-xl w-[90%] h-fit mb-12">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex border-dashed border-gray-300 border rounded-lg w-full mb-4 h-60 justify-center items-center flex-col cursor-pointer"
              onClick={() => {}}
            >
              <Image
                style={{ marginBottom: "1.5rem" }}
                src={excelupload}
                alt="excelIcon"
              />
              {fileName.length > 0 ? (
                <>
                  <span>{fileName}</span>
                  <span
                    style={{ color: "#D33030", marginTop: "1rem" }}
                    onClick={() => {
                      setFileName("");
                      setObjData([]);
                      const fileInput = document.getElementById(
                        "fileInput"
                      ) as HTMLInputElement;
                      if (fileInput) {
                        fileInput.value = "";
                      }
                    }}
                  >
                    Remove
                  </span>
                </>
              ) : (
                <span style={{ color: "#999CA0" }}>
                  Drop your excel sheet here or{" "}
                  <span
                    className="text-primary"
                    onClick={() => {
                      document.getElementById("fileInput")?.click();
                    }}
                  >
                    Browse
                  </span>
                </span>
              )}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>
            <button
              onClick={() => {
                document.getElementById("fileInput")?.click();
              }}
              className="flex justify-center items-center border-none h-10 rounded-lg bg-primary cursor-pointer"
            >
              {!showSpinner ? <Image src={uploadIcon} alt="uploadIcon" /> : ""}
              {!showSpinner ? (
                <span
                  style={{
                    color: "white",
                    marginLeft: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Upload
                </span>
              ) : (
                ""
              )}
              {showSpinner ? <Spinner /> : ""}
            </button>
          </div>
        </div>

        {objData.length > 0 && (
          <span className="m-12 mb-8 self-start font-bold text-xl">
            Uploads
          </span>
        )}
        <div className="w-[90%] overflow-x-scroll md:overflow-hidden ">
          <Table
            objData={objData}
            onSelect={onSelect}
            handleFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
