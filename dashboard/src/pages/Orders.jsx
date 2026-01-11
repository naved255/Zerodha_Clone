import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
import { Skeleton, Stack } from "@mui/material";

const OrdersSkeleton = () => {
  return (
    <Stack spacing={2}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          height={40}
          animation="wave"
        />
      ))}
    </Stack>
  );
}

const Orders = () => {
  const { availableBalance, availableMargin } = useContext(GeneralContext);
  const [orders, setOrders] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setloading(true);
        const res = await axios.get("https://zerodha-backend-tvro.onrender.com/orders", {
          withCredentials: true,
        });
        if (res.data?.status) {
          setOrders(res.data.order);
        }
      } catch (err) {
        console.log(err);
      }finally{
        setloading(false);
      }
    }
    fetchOrders();
  }, [availableBalance, availableMargin]);

  return (
    <div className="pt-6 px-6">
      {loading === true? (<div><OrdersSkeleton/></div>):
      orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-left">Stock</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Qty</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Time</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 text-sm"
                >
                  <td className="py-3 px-4 font-medium">{item.name}</td>

                  <td
                    className={`py-3 px-4 font-semibold ${
                      item.mode === "BUY"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.mode}
                  </td>

                  <td className="py-3 px-4 text-center">{item.qty}</td>
                  <td className="py-3 px-4 text-center">₹{item.price}</td>

                  <td className="py-3 px-4 text-center text-gray-600">
                    {item.status}
                  </td>

                  <td className="py-3 px-4 text-gray-500">
                    {new Date(item.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 pt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            viewBox="0 -960 960 960"
            width="100"
            fill="#9CA3AF"
          >
            <path d="M280-494Z" />
          </svg>

          <p className="text-gray-400 text-lg">
            You haven't placed any orders today
          </p>

          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Get started
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
