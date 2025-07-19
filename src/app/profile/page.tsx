import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Building } from 'lucide-react';

const profileData = [
  { field: 'School Name', value: 'JWD Ahh School' },
  { field: 'Address', value: '123 Education Lane, Knowledge City, 45678' },
  { field: 'Principal', value: 'Dr. Evelyn Reed' },
  { field: 'Established', value: '1995' },
  { field: 'School Type', value: 'Private, Co-educational' },
  { field: 'Grades', value: '1 - 12' },
  { field: 'Contact Email', value: 'contact@jwdahhschool.edu' },
  { field: 'Contact Phone', value: '(123) 456-7890' },
  { field: 'Motto', value: 'Excellence in Every Endeavor' },
];

export default function SchoolProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
            <Building className="w-16 h-16 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Our School Profile</h1>
            <p className="mt-4 text-lg text-muted-foreground">
            Get to know the core details of our esteemed institution.
            </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Detailed Information</CardTitle>
            <CardDescription>Official details about JWD Ahh School.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {profileData.map((item) => (
                  <TableRow key={item.field}>
                    <TableCell className="font-semibold text-primary w-1/3">{item.field}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
