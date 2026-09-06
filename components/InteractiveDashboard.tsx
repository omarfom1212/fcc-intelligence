"use client";

import { useMemo, useState } from "react";
import { BarChart3, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const data = {
  West: {
    Technology: { revenue: 2300000, orders: 9994, avg: 229.86, growth: 18 },
    Furniture: { revenue: 1480000, orders: 6210, avg: 238.32, growth: 11 },
    "Office Supplies": { revenue: 920000, orders: 5100, avg: 180.39, growth: 8 },
  },
  East: {
    Technology: { revenue: 1870000, orders: 7900, avg: 236.71, growth: 14 },
    Furniture: { revenue: 1210000, orders: 5400, avg: 224.07, growth: 9 },
    "Office Supplies": { revenue: 760000, orders: 4600, avg: 165.22, growth: 6 },
  },
  Central: {
    Technology: { revenue: 1590000, orders: 6900, avg: 230.43, growth: 12 },
    Furniture: { revenue: 980000, orders: 4700, avg: 208.51, growth: 7 },
    "Office Supplies": { revenue: 690000, orders: 4100, avg: 168.29, growth: 5 },
  },
  South: {
    Technology: { revenue: 1320000, orders: 6100, avg: 216.39, growth: 10 },
    Furniture: { revenue: 860000, orders: 4200, avg: 204.76, growth: 6 },
    "Office Supplies": { revenue: 590000, orders: 3700, avg: 159.46, growth: 4 },
  },
};

export default function InteractiveDashboard() {
  const [region, setRegion] = useState<keyof typeof data>("West");
  const [category, setCategory] =
    useState<keyof typeof data.West>("Technology");

  const current = data[region][category];

  const bars = useMemo(() => {
    return [
      { label: "Q1", value: Math.round(current.revenue * 0.18) },
      { label: "Q2", value: Math.round(current.revenue * 0.23) },
      { label: "Q3", value: Math.round(current.revenue * 0.27) },
      { label: "Q4", value: Math.round(current.revenue * 0.32) },
    ];
  }, [current]);

  const maxBar = Math.max(...bars.map((b) => b.value));

  return (
    <section id="demo" className="py-24 px-6">
      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-400 text-sm font-medium mb-3">
            INTERACTIVE DEMO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try the Dashboard Yourself
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Change the filters and watch the business metrics update instantly.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-500/30 bg-[#07101f] p-6 md:p-8 shadow-[0_0_60px_rgba(37,99,235,0.15)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
            <div>
              <p className="text-sm text-blue-400">Live Business Dashboard</p>
              <h3 className="text-2xl font-bold mt-1">
                Sales Performance
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={region}
                onChange={(e) =>
                  setRegion(e.target.value as keyof typeof data)
                }
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option value="West">West</option>
                <option value="East">East</option>
                <option value="Central">Central</option>
                <option value="South">South</option>
              </select>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as keyof typeof data.West)
                }
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option value="Technology">Technology</option>
                <option value="Furniture">Furniture</option>
                <option value="Office Supplies">Office Supplies</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <KpiCard
              icon={<DollarSign className="w-5 h-5 text-blue-400" />}
              title="Revenue"
              value={`$${(current.revenue / 1000000).toFixed(2)}M`}
            />

            <KpiCard
              icon={<ShoppingCart className="w-5 h-5 text-purple-400" />}
              title="Orders"
              value={current.orders.toLocaleString()}
            />

            <KpiCard
              icon={<BarChart3 className="w-5 h-5 text-cyan-400" />}
              title="Avg Order Value"
              value={`$${current.avg.toFixed(2)}`}
            />

            <KpiCard
              icon={<TrendingUp className="w-5 h-5 text-green-400" />}
              title="Growth"
              value={`+${current.growth}%`}
            />
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold">Quarterly Revenue</h4>
                <span className="text-xs text-gray-500">
                  {region} • {category}
                </span>
              </div>

              <div className="space-y-5">
                {bars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{bar.label}</span>
                      <span>
                        ${(bar.value / 1000).toFixed(0)}K
                      </span>
                    </div>

                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                        style={{
                          width: `${(bar.value / maxBar) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
              <h4 className="font-semibold mb-6">Performance Score</h4>

              <div className="flex items-center justify-center py-6">
                <div className="relative w-44 h-44">
                  <div className="absolute inset-0 rounded-full border-[14px] border-white/5" />

                  <div
                    className="absolute inset-0 rounded-full border-[14px] border-blue-500 transition-all duration-700"
                    style={{
                      clipPath: `inset(${100 - Math.min(current.growth * 5, 100)}% 0 0 0)`,
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold">
                      {Math.min(current.growth * 5, 100)}
                    </span>
                    <span className="text-gray-500 text-sm">Score</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-sm text-gray-400">
                Current selection:
                <span className="text-white ml-2">
                  {region} / {category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function KpiCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <p className="text-gray-400 text-sm">{title}</p>
      </div>

      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}