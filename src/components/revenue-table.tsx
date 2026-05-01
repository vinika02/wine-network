import { revenueColumns, revenueRows } from "@/lib/home-data";

export function RevenueTable() {
  return (
    <div className="motion-table overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#616161]">
            <th className="px-px py-8 align-middle font-display text-[18px] font-normal uppercase tracking-[-0.02em] text-white sm:text-[20px]">
              Metric Type
            </th>
            {revenueColumns.map((column, index) => {
              const color = index === 0 ? "text-[#E5E2E1]" : "text-white";
              return (
                <th
                  key={`${column}-${index}`}
                  className={`px-2 py-10 text-center align-middle font-display text-[16px] font-bold uppercase leading-tight tracking-[0.06em] sm:text-[20px] ${color}`}
                >
                  {column.split(" / ").map((part, i) => (
                    <span key={i} className="block">
                      {part}
                      {i === 0 ? " /" : ""}
                    </span>
                  ))}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {revenueRows.map((row, rowIndex) => (
            <tr
              key={row.metric}
              className={
                rowIndex === 0 ? "" : "border-t border-[rgba(77,70,53,0.1)]"
              }
            >
              <td className="px-px py-8 align-middle font-display text-[15px] font-normal tracking-[-0.02em] text-[#616161] sm:text-[18px]">
                {row.metric}
              </td>
              {row.values.map((value, index) => (
                <td
                  key={`${row.metric}-${index}`}
                  className="px-2 py-9 text-center align-middle font-display text-[15px] font-normal tracking-[-0.02em] text-white sm:text-[16px]"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
