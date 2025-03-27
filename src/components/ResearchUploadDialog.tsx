
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

// Define the form schema using zod
const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }),
  authors: z.string().min(3, { message: 'Authors field is required' }),
  category: z.string().min(3, { message: 'Category is required' }),
  pdfFile: z.any().refine((file) => file?.length === 1, { message: 'PDF file is required' }),
});

type ResearchUploadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ResearchUploadDialog = ({ open, onOpenChange }: ResearchUploadDialogProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      authors: '',
      category: '',
    },
  });
  
  // Handle form submission - Currently just shows a message
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // For now, just log the values and show a toast notification
    console.log('Research paper upload:', values);
    
    toast({
      title: t('research.uploadSuccess', 'Research paper submitted'),
      description: t('research.uploadPending', 'Your research paper will be reviewed before being published.'),
    });
    
    // Close the dialog and reset the form
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{t('research.uploadTitle', 'Upload Research Paper')}</DialogTitle>
          <DialogDescription>
            {t('research.uploadDescription', 'Share your research with the medical community. All submissions will be reviewed before publication.')}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('research.formTitle', 'Paper Title')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('research.formTitlePlaceholder', 'Enter the title of your research paper')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="authors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('research.formAuthors', 'Authors')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('research.formAuthorsPlaceholder', 'e.g. Smith J., Johnson M., etc.')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('research.formCategory', 'Category')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('research.formCategoryPlaceholder', 'e.g. Neurology, Oncology, etc.')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pdfFile"
              render={() => (
                <FormItem>
                  <FormLabel>{t('research.formFile', 'PDF File')}</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept=".pdf" 
                      onChange={(e) => {
                        form.setValue('pdfFile', e.target.files);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    {t('research.formFileDescription', 'Upload your research paper in PDF format.')}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                {t('common.cancel', 'Cancel')}
              </Button>
              <Button type="submit">
                {t('research.submitButton', 'Upload Research')}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchUploadDialog;
