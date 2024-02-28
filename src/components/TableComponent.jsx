import {Table, TableHeader, TableColumn, TableBody,TableRow, TableCell} from "@nextui-org/react";
import { Agremiado } from "./Agremiado";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { agremiados } from "@/data/agremiados";

export const TableComponent = () => {
  
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Apellido</TableColumn>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Dni</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        {
          agremiados.map(agremiado => {
            return (
              <TableRow key={agremiado.id}>
                <TableCell>{agremiado.apellido}</TableCell>
                <TableCell>{agremiado.nombre}</TableCell>
                <TableCell>{agremiado.email}</TableCell>
                <TableCell>{agremiado.dni}</TableCell>
                <TableCell className="flex gap-5">
                    <Link href="/consultorio">
                      <p>Consultorio</p>
                    </Link>
                    <FaRegCheckCircle className="text-2xl cursor-pointer"/>
                </TableCell>
              </TableRow>
              );
            })
          }
      </TableBody>
    </Table>
  );
}