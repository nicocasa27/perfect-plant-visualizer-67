
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, Download, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    abstract: 'This study explores how artificial intelligence can improve diagnostic accuracy in various neurological disorders, with a focus on early detection and treatment planning.'
  },
  {
    id: 2,
    title: 'Multimodal Analysis for Early Cancer Detection',
    authors: 'Williams P., Garcia J., Smith T.',
    date: '2023-09-22',
    category: 'Oncology',
    url: '#',
    pdfUrl: '#',
    abstract: 'A comprehensive approach to cancer detection using multiple data modalities including imaging, blood biomarkers, and genetic testing for improved early diagnosis.'
  },
  {
    id: 3,
    title: 'Machine Learning in Predictive Diagnosis: A 5-Year Study',
    authors: 'Brown R., Miller L., Davis K.',
    date: '2023-07-08',
    category: 'General Medicine',
    url: '#',
    pdfUrl: '#',
    abstract: 'This longitudinal study examines the effectiveness of machine learning algorithms in predicting patient outcomes across a wide range of medical conditions.'
  },
  {
    id: 4,
    title: 'Advances in Medical Imaging Analysis Using Deep Learning',
    authors: 'Martinez A., Lee S., Wilson J.',
    date: '2023-05-19',
    category: 'Radiology',
    url: '#',
    pdfUrl: '#',
    abstract: 'Recent developments in deep learning techniques for medical image analysis, with applications in radiology, pathology, and surgical planning.'
  },
  {
    id: 5,
    title: 'Clinical Validation of AI Assistant in Emergency Medicine',
    authors: 'Thompson E., Anderson M., Clark R.',
    date: '2023-03-30',
    category: 'Emergency Medicine',
    url: '#',
    pdfUrl: '#',
    abstract: 'This paper presents the results of a clinical validation study of an AI assistant designed to support emergency medicine physicians in triage and initial diagnosis.'
  },
];

const ResearchList = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter papers based on search term
  const filteredPapers = MOCK_PAPERS.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder={t('research.searchPlaceholder', 'Search by title, author, or category')}
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Research papers grid */}
      {filteredPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-2">
                    {paper.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {new Date(paper.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl">{paper.title}</CardTitle>
                <CardDescription>{paper.authors}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{paper.abstract}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Eye size={16} />
                  {t('research.viewPaper', 'View')}
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download size={16} />
                  {t('research.downloadPaper', 'Download')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          {t('research.noResults', 'No research papers found matching your search.')}
        </div>
      )}
    </div>
  );
};

export default ResearchList;
