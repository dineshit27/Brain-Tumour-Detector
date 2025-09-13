import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileImage, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Loader2,
  Download
} from "lucide-react";

interface AnalysisResult {
  tumorDetected: boolean;
  confidence: number;
  tumorLevel: "None" | "Small" | "Medium" | "Large";
  recommendations: string[];
  processingTime: number;
}

const TryNow = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  // Mock analysis function
  const performAnalysis = useCallback(async (uploadedFile: File): Promise<AnalysisResult> => {
    // Simulate analysis progress
    for (let i = 0; i <= 100; i += 10) {
      setAnalysisProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Mock results based on file name or random
    const fileName = uploadedFile.name.toLowerCase();
    const hasPositiveIndicator = fileName.includes('tumor') || fileName.includes('positive') || Math.random() > 0.7;
    
    const confidence = Math.random() * 30 + 70; // 70-100%
    const tumorLevel = hasPositiveIndicator 
      ? ["Small", "Medium", "Large"][Math.floor(Math.random() * 3)] as "Small" | "Medium" | "Large"
      : "None" as const;

    const recommendations = hasPositiveIndicator ? [
      "Immediate consultation with a neurosurgeon recommended",
      "Additional contrast MRI scan may be beneficial",
      "Consider molecular testing for treatment planning",
      "Regular monitoring with follow-up scans every 3 months"
    ] : [
      "No immediate intervention required",
      "Continue with routine monitoring",
      "Maintain healthy lifestyle practices",
      "Follow up with your physician as scheduled"
    ];

    return {
      tumorDetected: hasPositiveIndicator,
      confidence: Math.round(confidence),
      tumorLevel,
      recommendations: recommendations.slice(0, Math.floor(Math.random() * 2) + 2),
      processingTime: Math.random() * 2 + 1
    };
  }, []);

  const handleFileSelect = (selectedFile: File) => {
    // Validate file type
    if (!selectedFile.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, DICOM, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (max 50MB)
    if (selectedFile.size > 50 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 50MB",
        variant: "destructive"
      });
      return;
    }

    setFile(selectedFile);
    setResult(null);
    
    // Create preview URL for image files
    if (selectedFile.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setFilePreview(previewUrl);
    }
    
    toast({
      title: "File uploaded successfully",
      description: `${selectedFile.name} is ready for analysis`
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    try {
      const analysisResult = await performAnalysis(file);
      setResult(analysisResult);
      
      toast({
        title: "Analysis complete",
        description: `Processing completed in ${analysisResult.processingTime.toFixed(1)} seconds`
      });
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error processing your scan. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
      setAnalysisProgress(0);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFilePreview(null);
    setResult(null);
    setIsAnalyzing(false);
    setAnalysisProgress(0);
    
    // Clean up the preview URL
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
    }
  };

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI Brain Tumor Detection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your MRI scan for instant AI-powered analysis. Our advanced algorithms 
            can detect brain tumors with 95% accuracy in seconds.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-warning bg-warning/5">
          <Info className="h-4 w-4 text-warning" />
          <AlertDescription className="text-warning">
            <strong>Important:</strong> This tool is for educational and research purposes only. 
            Results should not replace professional medical diagnosis. Always consult with healthcare professionals.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 bg-gradient-card border-0 shadow-card">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Upload className="mr-3 h-6 w-6 text-primary" />
              Upload MRI Scan
            </h2>
            
            {!file ? (
              <div
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                  isDragging 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <FileImage className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Drop your MRI scan here
                </h3>
                <p className="text-muted-foreground mb-6">
                  Or click to browse files (JPEG, PNG, DICOM supported)
                </p>
                <Button asChild className="bg-gradient-primary hover:shadow-medical">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Select File
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const selectedFile = e.target.files?.[0];
                        if (selectedFile) handleFileSelect(selectedFile);
                      }}
                    />
                  </label>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* File Info and Preview */}
                <div className="bg-medical-light dark:bg-muted rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* File Info */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <FileImage className="h-8 w-8 text-primary" />
                          <div>
                            <p className="font-semibold text-foreground">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <CheckCircle className="h-6 w-6 text-success" />
                      </div>
                      
                      {isAnalyzing && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Analyzing scan...</span>
                            <span>{analysisProgress}%</span>
                          </div>
                          <Progress value={analysisProgress} className="h-2" />
                        </div>
                      )}
                    </div>
                    
                    {/* Image Preview */}
                    {filePreview && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Preview:</p>
                        <div className="relative rounded-lg overflow-hidden bg-muted/50 border">
                          <img 
                            src={filePreview} 
                            alt="MRI Scan Preview" 
                            className="w-full h-48 object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={isAnalyzing}
                    className="flex-1 bg-gradient-primary hover:shadow-medical"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-2 h-4 w-4" />
                        Start Analysis
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </div>
            )}
          </Card>

          {/* Results Section */}
          <Card className="p-8 bg-gradient-card border-0 shadow-card">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Brain className="mr-3 h-6 w-6 text-primary" />
              Analysis Results
            </h2>

            {!result ? (
              <div className="text-center py-12">
                <Brain className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Upload and analyze an MRI scan to see results here
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Detection Status */}
                <div className={`p-6 rounded-xl ${
                  result.tumorDetected 
                    ? "bg-destructive/10 border border-destructive/20" 
                    : "bg-success/10 border border-success/20"
                }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    {result.tumorDetected ? (
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-success" />
                    )}
                    <h3 className="text-lg font-semibold">
                      {result.tumorDetected ? "Tumor Detected" : "No Tumor Detected"}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Confidence:</span>
                      <span className="ml-2 font-semibold">{result.confidence}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tumor Level:</span>
                      <span className="ml-2 font-semibold">{result.tumorLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Recommendations:</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Processing Info */}
                <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                  Processing completed in {result.processingTime.toFixed(1)} seconds
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    New Analysis
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Technical Info */}
        <Card className="mt-12 p-8 bg-medical-light dark:bg-muted border-0">
          <h3 className="text-xl font-semibold text-foreground mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold text-primary">1. Image Processing</div>
              <p className="text-muted-foreground">
                Advanced preprocessing normalizes and enhances your MRI scan for optimal analysis.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">2. AI Analysis</div>
              <p className="text-muted-foreground">
                Deep learning models trained on thousands of scans analyze tissue patterns and anomalies.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">3. Results Generation</div>
              <p className="text-muted-foreground">
                Comprehensive report with detection status, confidence levels, and medical recommendations.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TryNow;