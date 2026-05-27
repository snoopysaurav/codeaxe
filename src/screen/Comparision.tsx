import { comparisonData } from "@/seed/comparisionData";

const Comparision = () => {
  return (
    <div className="bg-bg-surface">
      <div className="mx-auto p-12 flex flex-col gap-14 max-w-360">
        {/* Header */}
        <div className="flex flex-col gap-4">
          {/* Label Text */}
          <span className="text-text-secondary">// WHY CODEAXE</span>
          {/* Title */}
          <h2 className="text-text-primary max-w-101.5">
            Other editors predict. CodeAxe understands.
          </h2>
        </div>
        {/* Content Container */}
        <div>
          <div className="w-full overflow-x-auto text-text-primary">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left p-4"></th>
                  <th className="p-4">CodeAxe</th>
                  <th className="p-4">Copilot</th>
                  <th className="p-4">Cursor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item) => (
                  <tr key={item.feature} className="border-b border-zinc-800">
                    <td className="p-4 font-medium">{item.feature}</td>

                    <td className="p-4 text-center">
                      {typeof item.codeAxe === "boolean"
                        ? item.codeAxe
                          ? "✔"
                          : "✖"
                        : item.codeAxe}
                    </td>

                    <td className="p-4 text-center">
                      {typeof item.copilot === "boolean"
                        ? item.copilot
                          ? "✔"
                          : "✖"
                        : item.copilot}
                    </td>

                    <td className="p-4 text-center">
                      {typeof item.cursor === "boolean"
                        ? item.cursor
                          ? "✔"
                          : "✖"
                        : item.cursor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
