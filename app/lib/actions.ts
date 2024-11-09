'use server';

import { date, z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(["pending", "paid"]),
    date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {

    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });

    const amountInCents = amount * 100;
    const date = new Date().toISOString().split("T")[0];
    //const rawFormData = {
    //    customerId: formData.get("customerId"),
    //    amount: formData.get("amount"),
    //    status: formData.get("status")
    //};
    //console.log(rawFormData);
    //console.log(typeof rawFormData.amount);

    await sql`
        INSERT INTO INVOICES (CUSTOMER_ID, AMOUNT, STATUS, DATE)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData){

    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });

    const amountInCents = amount * 100;

    await sql`
    UPDATE INVOICES SET CUSTOMER_ID = ${customerId}, AMOUNT = ${amountInCents}, STATUS = ${status}
    WHERE ID = ${id}`;

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}