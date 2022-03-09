import React, { useEffect, useState } from "react";
import getData from "../../utils/getData";
import { Row, Cell } from "./Table.styles";
import Theader from "./Theader/Theader";

interface IPerson {
  person_name: string;
  status: string;
}

interface IWork {
  assigned_to: IPerson[];
  description: string;
  priority: string;
  received_date: string;
  status: string;
  work_order_id: string;
}

interface IData {
  exec_time: number;
  response: {
    current_page: number;
    data: IWork[];
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export const Table = () => {
  const [data, setData] = useState<IData | null>(null);

  const fetch = async () => {
    setData(await getData());
  };

  useEffect(() => {
    fetch();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Theader />
      {data ? (
        <div>
          <Row>
            {data.response.data.map((d) => (
              <>
                <Cell>{d.work_order_id}</Cell>
                <Cell>{d.description}</Cell>
                <Cell>{d.received_date}</Cell>
                <Cell>
                  {d.assigned_to.map((assigned) => (
                    <>
                      <div>
                        <p style={{ margin: 0 }}>Name:</p>
                        <span>{assigned.person_name}</span>
                      </div>
                      <div style={{ marginTop: "0.5rem" }}>
                        <p style={{ margin: 0 }}>Status:</p>
                        <span>{assigned.status}</span>
                      </div>
                    </>
                  ))}
                </Cell>
                <Cell>{d.status}</Cell>
                <Cell>{d.priority}</Cell>
              </>
            ))}
          </Row>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Table;
