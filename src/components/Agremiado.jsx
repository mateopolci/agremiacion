import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import {TableRow, TableCell} from "@nextui-org/react";


export const Agremiado = ({id,nombre,apellido,mail,tel}) => {
    return (
      <>
        <TableRow key={id}>
          <TableCell>{apellido}</TableCell>
          <TableCell>{nombre}</TableCell>
          <TableCell>{mail}</TableCell>
          <TableCell>{tel}</TableCell>
          <TableCell className="flex gap-5">
              <Link href="/consultorio">
                <p>Consultorio</p>
              </Link>
              <FaRegCheckCircle className="text-2xl cursor-pointer"/>
          </TableCell>
        </TableRow>
      </>
    );
  }