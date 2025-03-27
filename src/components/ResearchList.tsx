
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, Download, Eye, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ResearchUploadDialog from './ResearchUploadDialog';

// Mock data for research papers
const MOCK_PAPERS = [
  {
    id: 1,
    title: 'AI-Driven Diagnostic Accuracy in Neurological Disorders',
    authors: 'Johnson S., Chen M., Rodriguez E.',
    date: '2023-11-15',
    category: 'Neurology',
    url: '#',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Multimodal Analysis for Early Cancer Detection',
    authors: 'Williams P., Garcia J., Smith T.',
    date: '2023-09-22',
    category: 'Oncology',
    url: '#',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Machine Learning in Predictive Diagnosis: A 5-Year Study',
    authors: 'Brown R., Miller L., Davis K.',
    date: '2023-07-08',
    category: 'General Medicine',
    url: '#',
    pdfUrl: '#',
  },
  {
    id: 4,
    title: 'Advances in Medical Imaging Analysis Using Deep Learning',
    authors: 'Martinez A., Lee S., Wilson J.',
    date: '2023-05-19',
    category: 'Radiology',
    url: '#',
    pdfUrl: '#',
  },
  {
    id: 5,
    title: 'Clinical Validation of AI Assistant in Emergency Medicine',
    authors: 'Thompson E., Anderson M., Clark R.',
    date: '2023-03-30',
    category: 'Emergency Medicine',
    url: '#',
    pdfUrl: '#',
  },
];

const ResearchList = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  
  // Filter papers based on search term
  const filteredPapers = MOCK_PAPERS.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder={t('research.searchPlaceholder', 'Search by title, author, or category')}
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Upload button (for future implementation) */}
        <Button 
          onClick={() => setShowUploadDialog(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Upload size={18} className="mr-2" />
          {t('research.uploadPaper', 'Upload Research')}
        </Button>
      </div>
      
      {/* Research papers table */}
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">{t('research.tableTitle', 'Title')}</TableHead>
              <TableHead className="w-[25%]">{t('research.tableAuthors', 'Authors')}</TableHead>
              <TableHead className="w-[15%]">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {t('research.tableDate', 'Date')}
                </div>
              </TableHead>
              <TableHead className="w-[10%]">{t('research.tableCategory', 'Category')}</TableHead>
              <TableHead className="w-[10%] text-right">{t('research.tableActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <TableRow key={paper.id}>
                  <TableCell className="font-medium">{paper.title}</TableCell>
                  <TableCell>{paper.authors}</TableCell>
                  <TableCell>{new Date(paper.date).toLocaleDateString()}</TableCell>
                  <TableCell>{paper.category}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">
                          <Eye size={16} />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={paper.pdfUrl} download>
                          <Download size={16} />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  {t('research.noResults', 'No research papers found matching your search.')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Upload Dialog (for future implementation) */}
      <ResearchUploadDialog 
        open={showUploadDialog} 
        onOpenChange={setShowUploadDialog} 
      />
    </div>
  );
};

export default ResearchList;
