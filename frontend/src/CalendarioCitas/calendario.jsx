import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navBar";

export function CalenderCitas() {
  const navigate = useNavigate();
  const localizer = dayjsLocalizer(dayjs);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      start: dayjs("2025-05-20T18:00:00").toDate(),
      end: dayjs("2025-05-20T20:00:00").toDate(),
      title: "Cita pasada",
    },
    {
      start: dayjs("2025-05-22T18:00:00").toDate(),
      end: dayjs("2025-05-22T20:00:00").toDate(),
      title: "Cita programada",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [formdata, setFormData] = useState({
    strat: "",
    end: "",
    horaFinal: "",
    horaInicio: "",
    title: "",
  });

  useEffect(() => {
    const citasReq = async (req, res) => {
      try {
        const eventsList = await axios
          .get("http://localhost:3000/api/citasReq")
          .then((res) => {
            const formatted = res.data.map((cita) => ({
              start: dayjs(
                `${cita.strat.split("T")[0]}T${cita.horaInicio}`
              ).toDate(),
              end: dayjs(`${cita.end.split("T")[0]}T${cita.horaFin}`).toDate(),
              title: cita.title,
            }));
            setEvents(formatted);
          });
      } catch (err) {
        console.error(err);
      }
    };

    citasReq();
  }, [showModal]);

  const today = dayjs().startOf("day");
  const filteredEvents = events.filter((event) =>
    dayjs(event.end).isSameOrAfter(today)
  );

  const handleSelectSlot = () => {
    setShowModal(true);
    setFormData({
      strat: "",
      end: "",
      horaFinal: "",
      horaInicio: "",
      title: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/crearCitas",
        formdata
      );

      if (response) {
        setShowModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full h-auto pt-14 flex place-items-center justify-center">
        <Calendar
          style={{
            height: "95vh",
            width: "100vh",
          }}
          localizer={localizer}
          events={filteredEvents}
          views={["month"]}
          date={currentDate}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          dayPropGetter={(date) => {
            const today = new Date();
            if (date < today.setHours(0, 0, 0, 0)) {
              return {
                style: {
                  backgroundColor: "#e0e0e0",
                },
              };
            }
            return {};
          }}
          onSelectSlot={handleSelectSlot}
          selectable
        />
        {showModal && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl">Crear Cita</h1>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="strat" className="mb-2">
                  para que dia deseas tu cita?
                </label>
                <input
                  type="date"
                  id="strat"
                  name="strat"
                  placeholder="Seleccione su fecha"
                  className="w-full border rounded-2xl p-2 mb-2"
                  value={formdata.strat}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-20 mb-2 p-2 bg-[#01C9FF] rounded-xl duration-300 ease-in-out hover:bg-[#3991AA] hover:scale-[103%]"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
