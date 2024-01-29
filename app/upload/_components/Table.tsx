import Dropdown from "@/components/dropdown";
import Image from "next/image";
import close from "../../_images/close.svg";
import Link from "next/link";
interface TableProps {
  objData: any[];
  onSelect: (data: any, i: number) => void;
  handleFilter: (data: any, i: number) => void;
}
const Table = ({ objData, onSelect, handleFilter }: TableProps) => {
  return (
    <>
      {objData.length > 0 ? (
        <>
          <span
            className="table_title"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "2rem",
              alignSelf: "flex-start",
            }}
          >
            Uploads
          </span>
          <div className="excel_table ">
            <div className="table_row_head ">
              <div>SI No.</div>
              <div>Links</div>
              <div>Prifix</div>
              <div>Add Tags</div>
              <div>Selected Tags</div>
            </div>
            {objData.map((val, i) => {
              return (
                <div key={i} className="table_row">
                  <div>{parseInt(val.id) < 10 ? `0${val.id}` : val.id}</div>
                  <div className="underline text-[#5b93ff] cursor-pointer">
                    {val.links}
                  </div>
                  <div>{val.prefix}</div>
                  <div>
                    <Dropdown
                      onSelect={(data: string) => {
                        onSelect(data, i);
                      }}
                      data={val["select tags"].split(",")}
                    />
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {val.selectedTags.map((a: string, indx: number) => {
                      return (
                        <div
                          key={indx}
                          className="flex justify-center items-center bg-[#605BFF] rounded-[5px] w-fit max-w-32 text-white m-2 cursor-pointer"
                          onClick={() => handleFilter(a, i)}
                        >
                          <span style={{ marginRight: "1rem" }}>{a}</span>
                          <Image alt="close" src={close} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
