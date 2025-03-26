import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
export const TopInvestments = () => {
  // This would be replaced with actual data from your database
  const investments = [
    { company: "Databricks", amount: "$10B", investor: "Thrive Capital, Andreessen Horowitz, Meta", date: "2025-03-21" },
    { company: "Together AI", amount: "$305M", investor: "Lightspeed Venture Partners", date: "2025-03-03" },
    { company: "ElevenLabs", amount: "$180M", investor: "Andreessen Horowitz, ICONIQ Growth, NEA", date: "2025-03-21" },
    { company: "Harvey", amount: "$300M", investor: "OpenAI Startup Fund, GV", date: "2025-03-12" },
    { company: "Abridge", amount: "$250M", investor: "Elad Gil, IVP", date: "2025-03-17" },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h3 className="text-xl font-mono text-matrix-green mb-4">Top Investments of the Month</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-matrix-green">Company</TableHead>
            <TableHead className="text-matrix-green">Amount</TableHead>
            <TableHead className="text-matrix-green">Lead Investor</TableHead>
            <TableHead className="text-matrix-green">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investments.map((inv, index) => (
            <TableRow key={index}>
              <TableCell className="text-white">{inv.company}</TableCell>
              <TableCell className="text-white">{inv.amount}</TableCell>
              <TableCell className="text-white">{inv.investor}</TableCell>
              <TableCell className="text-white">{inv.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};