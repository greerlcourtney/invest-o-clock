import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
export const NewAcquisitions = () => {
  // This would be replaced with actual data from your database
  const acquisitions = [
    { acquired: "Intra-Cellular Therapies, Inc.", acquirer: "Johnson & Johnson", value: "$14.60B", date: "2025-03-13" },
    { acquired: "Aspen Technology Inc", acquirer: "Emerson Electric Co.", value: "Not specified", date: "2025-03-11" },
    { acquired: "Stronghold Digital Mining Inc", acquirer: "Bitfarms Ltd.", value: "Not specified", date: "2025-03-14" },
    { acquired: "Icc Holdings Inc", acquirer: "Mutual Capital Group Inc", value: "Not specified", date: "2025-03-12" },
    { acquired: "Best Inc", acquirer: "Phoenix Global Partners et al.", value: "Not specified", date: "2025-03-07" },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h3 className="text-xl font-mono text-matrix-green mb-4">New Acquisitions This Month</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-matrix-green">Acquired</TableHead>
            <TableHead className="text-matrix-green">Acquirer</TableHead>
            <TableHead className="text-matrix-green">Value</TableHead>
            <TableHead className="text-matrix-green">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {acquisitions.map((acq, index) => (
            <TableRow key={index}>
              <TableCell className="text-white">{acq.acquired}</TableCell>
              <TableCell className="text-white">{acq.acquirer}</TableCell>
              <TableCell className="text-white">{acq.value}</TableCell>
              <TableCell className="text-white">{acq.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};