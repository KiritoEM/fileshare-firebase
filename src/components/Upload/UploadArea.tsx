import { Fragment, useEffect, useState } from "react";
import FilePreviewCard from "../ChildrenComponents/FilePreviewCard";
import { useFile } from "../../hooks/useFile";
import uploadFileHelper from "../../helper/uploadFile.helper";
("../../helper/uploadFile.helper");
import getEmail from "../../util/getEmail";
import { useLoader } from "../../hooks/useLoader";

const UploadArea = (): JSX.Element => {
  const [clicked, setCLicked] = useState<boolean>(false);
  const { file, fileChange } = useFile();
  const { formatFileSize, verifySize, uploadFile } = uploadFileHelper();
  const userEmail = getEmail();
  const { handleStartUpload, handleStopUpload } = useLoader();

  useEffect(() => {
    if (file) {
      setCLicked(true);
    }
  }, [file]);

  const handleUpload = async () => {
    if (file) {
      handleStartUpload();

      try {
        await uploadFile(file, userEmail);
      } catch (error) {
        console.error("Upload failed", error);
      } finally {
        handleStopUpload();
        window.location.reload();
      }
    }
  };

  return (
    <section id="upload-area">
      <div id="upload-area__container">
        {clicked === false ? (
          <Fragment>
            <div className="cloud-img">
              <img src="/cloud.png" alt="" />
            </div>
            <div className="label">
              <p>Veuillez séléctionnez un fichier à sauvegarder</p>
            </div>
          </Fragment>
        ) : (
          <div className="file-preview__container">
            {file && (
              <Fragment>
                {verifySize(file.size) === true && (
                  <FilePreviewCard
                    name={file.name}
                    size={formatFileSize(file.size)}
                  />
                )}
              </Fragment>
            )}
          </div>
        )}

        {clicked === false ? (
          <div className="button">
            <label htmlFor="file-upload" className="btn">
              Séléctionner un fichier
            </label>
            <input
              type="file"
              name=""
              id="file-upload"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                fileChange(e);
              }}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <div className="button">
            <button className="btn" onClick={handleUpload}>
              Uploader le fichier
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadArea;
