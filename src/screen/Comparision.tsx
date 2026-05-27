import { comparisonData } from "@/seed/comparisionData";
import SectionHead from "@/components/SectionHead";
const Comparision = () => {
  return (
    <div className="bg-bg-surface">
      <div className="mx-auto p-12 flex flex-col gap-14 max-w-360">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <SectionHead
            labelText="WHY CODEAXE"
            headingText="Other editors predict. CodeAxe understands."
          />
        </div>
        {/* Content Container */}
        <div>
          <div className="w-full overflow-x-auto text-text-primary">
            <table className="w-full border-collapse [&_th:nth-child(2)]:bg-bg-elevated [&_th:nth-last]:rounded-md [&_td:nth-child(2)]:bg-bg-elevated">
              <thead>
                <tr>
                  <th className="text-left p-4"></th>
                  <th className="p-4">CodeAxe</th>
                  <th className="p-4">Copilot</th>
                  <th className="p-4">Cursor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item) => (
                  <tr
                    key={item.feature}
                    className=" not-last:border-b not-last:border-dashed not-last:border-border-emphasis"
                  >
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
