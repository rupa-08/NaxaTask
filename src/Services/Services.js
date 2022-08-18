import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../redux/service";
import "./Services.css";

function Services() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const service = useSelector((state) => state.service.service);
  console.log(service);

  return (
    <div className="App" id="ServiceID">
      {service &&
        service.map((service, index) => {
          if (index % 2 === 0) {
            return (
              <div className="services" key={index === 0}>
                <div className="leftComponent">
                  <img className="image" src={service.photo} />
                </div>
                <div className="rightComponent">
                  {/* <img src={service.icon} /> */}
                  <h2>{service.title}</h2>
                  <p
                    className="description1"
                    dangerouslySetInnerHTML={{ __html: service.description1 }}
                  ></p>
                  <p
                    className="description2"
                    dangerouslySetInnerHTML={{ __html: service.description2 }}
                  ></p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="services" key={index === 0}>
                <div className="rightComponent">
                  {/* <img src={service.icon} /> */}
                  <h2>{service.title}</h2>
                  <p
                    className="description1"
                    dangerouslySetInnerHTML={{ __html: service.description1 }}
                  ></p>
                  <p
                    className="description2"
                    dangerouslySetInnerHTML={{ __html: service.description2 }}
                  ></p>
                </div>
                <div className="leftComponent">
                  <img className="image" src={service.photo} />
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Services;
