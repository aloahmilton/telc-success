/**
 * Browser stub for adminDataService.ts
 * All admin data operations are server-side only.
 * This stub prevents the DB/mongoose import chain from crashing the browser.
 */

export async function fetchAllAdminData() {
  return { success: false, exams: [], materials: [], trainings: [], newsList: [], centers: [], partners: [], certificates: [], inquiries: [] };
}
export async function dbCreateExam(_data: unknown) { return null; }
export async function dbDeleteExam(_id: string) { return null; }
export async function dbCreateCertificate(_data: unknown) { return null; }
export async function authenticateAdminUser(_email: string, _pass: string) {
  return { success: false };
}
