import React, { useState } from 'react';
import { FileText, ShieldCheck, Globe, Workflow,FileOutput, Database, Cpu, Brain, GitBranch, Layers, Zap, BarChart3, Settings, CheckCircle, AlertTriangle } from 'lucide-react';

const ArchitectureDiagram = () => {
  const [selectedView, setSelectedView] = useState('complete');
  const [highlightPath, setHighlightPath] = useState(null);

  const ViewSelector = () => (
    <div className="flex gap-2 mb-6 flex-wrap">
      <button
        onClick={() => setSelectedView('complete')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedView === 'complete' 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Complete View
      </button>
      <button
        onClick={() => setSelectedView('hld-pipeline')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedView === 'hld-pipeline' 
            ? 'bg-green-600 text-white shadow-lg' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        HLD Pipeline
      </button>
      <button
        onClick={() => setSelectedView('ml-pipeline')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedView === 'ml-pipeline' 
            ? 'bg-purple-600 text-white shadow-lg' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        ML Pipeline
      </button>
      <button
        onClick={() => setSelectedView('workflows')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedView === 'workflows' 
            ? 'bg-orange-600 text-white shadow-lg' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Workflow Modes
      </button>
    </div>
  );

  const SystemHeader = () => (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl mb-6 shadow-xl">
      <div className="flex items-center gap-4 mb-3">
        <Brain className="w-10 h-10" />
        <div>
          <h1 className="text-3xl font-bold">DesignMind GenAI</h1>
          <p className="text-blue-200 text-sm">HLD Generator with ML Quality Scoring</p>
        </div>
      </div>
      <div className="flex gap-6 text-sm bg-blue-800 bg-opacity-50 p-3 rounded-lg">
        <div><span className="font-semibold">Stack:</span> Python, Streamlit, LangGraph</div>
        <div><span className="font-semibold">AI:</span> Googl Gemini-2.0-flash</div>
        <div><span className="font-semibold">ML:</span> scikit-learn, XGBoost</div>
      </div>
    </div>
  );

  const CompleteArchitecture = () => (
    <div className="space-y-6">
{/* Layer 1: User Interface */}
<div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-300 shadow-lg">
  <div className="flex items-center gap-2 mb-4">
    <Layers className="w-6 h-6 text-indigo-600" />
    <h2 className="text-xl font-bold text-indigo-900">Layer 1: User Interface (Streamlit)</h2>
  </div>

  <div className="grid grid-cols-3 gap-4">
    {/* HLD Tab */}
    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow flex items-center gap-3">
      <FileText className="w-6 h-6 text-indigo-600" />
      <div>
        <div className="font-semibold text-sm mb-1">HLD Generation Tab</div>
        <div className="text-xs text-gray-600">PDF Upload, Workflow Config, Progress Monitor</div>
      </div>
    </div>

    {/* ML Training */}
    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow flex items-center gap-3">
      <Brain className="w-6 h-6 text-indigo-600" />
      <div>
        <div className="font-semibold text-sm mb-1">ML Training Tab</div>
        <div className="text-xs text-gray-600">Dataset Generation, Model Training, Validation</div>
      </div>
    </div>

    {/* Quality Tab */}
    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow flex items-center gap-3">
      <BarChart3 className="w-6 h-6 text-indigo-600" />
      <div>
        <div className="font-semibold text-sm mb-1">Quality Prediction Tab</div>
        <div className="text-xs text-gray-600">Score Display, Feature Importance, Analytics</div>
      </div>
    </div>
  </div>

  <div className="mt-3 text-center">
    <div className="inline-block bg-indigo-600 text-white px-3 py-1 rounded text-xs font-semibold">
      Real-time Event Streaming ↓
    </div>
  </div>
</div>

      {/* Layer 2: Workflow Orchestration */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-900">Layer 2: Workflow Orchestration (LangGraph)</h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-lg border border-green-200 shadow">
            <div className="font-semibold text-sm mb-1">Sequential Mode</div>
            <div className="text-xs text-gray-600">Linear node execution →</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200 shadow">
            <div className="font-semibold text-sm mb-1">Parallel Mode</div>
            <div className="text-xs text-gray-600">Concurrent Auth/Domain/Behavior</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200 shadow">
            <div className="font-semibold text-sm mb-1">Conditional Mode</div>
            <div className="text-xs text-gray-600">Dynamic content routing</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200 shadow">
            <div className="font-semibold text-sm mb-1">State Manager</div>
            <div className="text-xs text-gray-600">HLDState (Pydantic)</div>
          </div>
        </div>
      </div>

      {/* Layer 3: Dual Pipeline Split */}
      <div className="grid grid-cols-2 gap-6">
        {/* HLD Generation Pipeline */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-300 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-cyan-600" />
            <h2 className="text-lg font-bold text-cyan-900">HLD Generation Pipeline</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: 1, name: 'PDF Extraction', agent: 'PDF Agent', color: 'bg-cyan-100 border-cyan-400' },
              { num: 2, name: 'Auth & Integrations', agent: 'Auth Agent', color: 'bg-cyan-100 border-cyan-400' },
              { num: 3, name: 'Domain & API Design', agent: 'Domain Agent', color: 'bg-cyan-100 border-cyan-400' },
              { num: 4, name: 'Behavior & Quality', agent: 'Behavior Agent', color: 'bg-cyan-100 border-cyan-400' },
              { num: 5, name: 'Diagram Generation', agent: 'Diagram Agent', color: 'bg-cyan-100 border-cyan-400' },
              { num: 6, name: 'Output Composition', agent: 'Output Agent', color: 'bg-cyan-100 border-cyan-400' }
            ].map(node => (
              <div key={node.num} className={`${node.color} p-3 rounded-lg border-2 shadow-sm`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">Node {node.num}: {node.name}</div>
                    <div className="text-xs text-gray-600">→ {node.agent}</div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-cyan-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ML Quality Pipeline */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-600" />
            <h2 className="text-lg font-bold text-purple-900">ML Quality Assessment</h2>
          </div>
          
          <div className="mb-4">
            <div className="font-semibold text-sm text-purple-800 mb-2">Training Pipeline:</div>
            <div className="space-y-2">
              {[
                'Synthetic Dataset (30K samples)',
                'Feature Extraction (37 features)',
                'Feature Selection ',
                'StandardScaler Normalization',
                'Model Training (RF, GB, XGB)',
                'Cross-validation & Tuning',
                'Model Persistence (.pkl)'
              ].map((step, idx) => (
                <div key={idx} className="bg-purple-100 border-2 border-purple-400 p-2 rounded-lg text-xs">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm text-purple-800 mb-2">Inference Pipeline:</div>
            <div className="space-y-2">
              {[
                'Feature Extraction from HLD',
                'Ensemble Prediction (3 models)',
                'Quality Score (0-100)',
                'Feature Importance Analysis'
              ].map((step, idx) => (
                <div key={idx} className="bg-pink-100 border-2 border-pink-400 p-2 rounded-lg text-xs">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: AI Agent Layer */}
<div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-300 shadow-lg">
  <div className="flex items-center gap-2 mb-4">
    <Brain className="w-6 h-6 text-amber-600" />
    <h2 className="text-xl font-bold text-amber-900">
      Layer 3: AI Agent Layer (Google Gemini-2.0-flash)
    </h2>
  </div>

  <div className="grid grid-cols-7 gap-2">

    {/* Base Agent */}
    {/* <div className="bg-white p-3 rounded-lg border border-amber-200 shadow text-center">
      <Cpu className="w-5 h-5 text-amber-600 mx-auto mb-1" />
      <div className="font-semibold text-xs">Base Agent</div>
      <div className="text-xs text-gray-600">Framework</div>
    </div> */}

    {/* Dynamic Agents With Icons */}
    {[
      { name: 'Base Agent', icon: Cpu },
      { name: 'PDF', icon: FileText },
      { name: 'Auth', icon: ShieldCheck },
      { name: 'Domain', icon: Globe },
      { name: 'Behavior', icon: Settings },
      { name: 'Diagram', icon: Workflow },
      { name: 'Output', icon: FileOutput }
    ].map(({ name, icon: Icon }) => (
      <div
        key={name}
        className="bg-amber-100 p-3 rounded-lg border border-amber-300 shadow text-center flex flex-col items-center"
      >
        <Icon className="w-5 h-5 text-amber-600 mb-1" />
        <div className="font-semibold text-xs">{name}</div>
        <div className="text-xs text-gray-600">Agent</div>
      </div>
    ))}

  </div>

  <div className="mt-3 text-center text-xs text-amber-800">
    Structured Output Parsing | Retry Logic | Google Gemini-2.0-flash Integration
  </div>
</div>


      {/* Layer 5: Storage */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-2 border-gray-300 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-6 h-6 text-gray-600" />
          <h2 className="text-xl font-bold text-gray-900">Layer 4: Data Storage & Artifacts</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
            <div className="font-semibold text-sm mb-2">Input</div>
            <div className="text-xs text-gray-600">data/*.pdf</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
            <div className="font-semibold text-sm mb-2">Intermediate</div>
            <div className="text-xs text-gray-600">output/*/json/*.json</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
            <div className="font-semibold text-sm mb-2">Documents</div>
            <div className="text-xs text-gray-600">output/*/hld/*.md, *.html</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow">
            <div className="font-semibold text-sm mb-2">Diagrams</div>
            <div className="text-xs text-gray-600">output/*/diagrams/*.png, *.svg</div>
          </div>
        </div>
      </div>
    </div>
  );

  const HLDPipelineView = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">HLD Generation Pipeline - Detailed Flow</h2>
        
        <div className="space-y-4">
          {[
            {
              node: 'Node 1: PDF Extraction',
              agent: 'PDF Agent',
              input: 'Requirement PDF',
              process: 'Text extraction → Markdown conversion → Structure analysis',
              output: 'extracted_text.json',
              color: 'from-blue-100 to-blue-200'
            },
            {
              node: 'Node 2: Authentication & Integrations',
              agent: 'Auth Agent',
              input: 'Extracted text',
              process: 'OAuth/JWT detection → External integrations → Security threats',
              output: 'authentication.json',
              color: 'from-green-100 to-green-200'
            },
            {
              node: 'Node 3: Domain & API Design',
              agent: 'Domain Agent',
              input: 'Extracted text',
              process: 'Entity extraction → REST API specs → Request/Response schemas',
              output: 'domain.json',
              color: 'from-purple-100 to-purple-200'
            },
            {
              node: 'Node 4: Behavior & Quality Analysis',
              agent: 'Behavior Agent',
              input: 'Extracted text',
              process: 'Use cases → User stories → NFRs → Risk analysis',
              output: 'behavior.json',
              color: 'from-yellow-100 to-yellow-200'
            },
            {
              node: 'Node 5: Diagram Generation',
              agent: 'Diagram Agent',
              input: 'Domain + Behavior data',
              process: 'Mermaid class diagrams → Sequence diagrams → PNG/SVG rendering',
              output: 'diagrams/*.png',
              color: 'from-pink-100 to-pink-200'
            },
            {
              node: 'Node 6: Output Composition',
              agent: 'Output Agent',
              input: 'All node outputs',
              process: 'HLD compilation → HTML generation → Risk heatmap',
              output: 'HLD.md, HLD.html',
              color: 'from-orange-100 to-orange-200'
            }
          ].map((step, idx) => (
<div
  key={idx}
  className={`bg-gradient-to-r ${step.color} p-6 rounded-xl border-2 border-gray-300 shadow-lg`}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <div>
      <div className="font-bold text-xl">{step.node}</div>
      <div className="text-base text-gray-700">Powered by: {step.agent}</div>
    </div>
    <Zap className="w-7 h-7 text-yellow-600" />
  </div>

  {/* FIXED Layout */}

<div className="grid grid-cols-3 gap-4 mt-4 text-[17px] leading-relaxed items-start">

  {/* Input */}
  <div className="text-left px-3 border-r border-gray-300/50">
    <div className="font-semibold text-gray-800 mb-1">Input</div>
    <div className="text-gray-700">
      {step.input}
    </div>
  </div>

  {/* Processing */}
  <div className="text-center px-3">
    <div className="font-semibold text-gray-800 mb-1">Processing</div>
    <div className="text-gray-700 max-w-[420px] mx-auto">
      {step.process}
    </div>
  </div>

  {/* Output */}
  <div className="text-right px-3 border-l border-gray-300/50">
    <div className="font-semibold text-gray-800 mb-1">Output</div>
    <div className="text-gray-700">
      {step.output}
    </div>
  </div>




  </div>

  {/* Arrow */}
  {/* {idx < 5 && (
    <div className="text-center mt-4">
      <div className="inline-block text-3xl text-gray-400">↓</div>
    </div>
  )} */}
</div>

          ))}
        </div>

        <div className="mt-6 bg-blue-100 p-4 rounded-lg border-2 border-blue-400">
          <div className="font-bold text-blue-900 mb-2">State Management (HLDState)</div>
          <div className="text-sm text-blue-800">
            Pydantic model tracking: ProcessingStatus, Node outputs, Error handling, Workflow progress
          </div>
        </div>
      </div>
    </div>
  );

  const MLPipelineView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Training Pipeline */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-400 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Training Pipeline</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">1. Synthetic Dataset Generation</div>
              <div className="text-sm text-gray-700">Generates 30,000 training samples with varying quality levels</div>
              <div className="mt-2 text-xs bg-purple-100 p-2 rounded">
                Output: synthetic_hld_dataset.csv
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">2. Feature Extraction</div>
              <div className="text-sm text-gray-700 mb-2">37 engineered features:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-purple-50 p-2 rounded">Word count metrics</div>
                <div className="bg-purple-50 p-2 rounded">Readability scores</div>
                <div className="bg-purple-50 p-2 rounded">Security mentions</div>
                <div className="bg-purple-50 p-2 rounded">API endpoint count</div>
                <div className="bg-purple-50 p-2 rounded">Diagram presence</div>
                <div className="bg-purple-50 p-2 rounded">NFR coverage</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">3. Feature Selection</div>
              <div className="text-sm text-gray-700">SelectKBest algorithm selects top 25 features</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">4. Normalization</div>
              <div className="text-sm text-gray-700">StandardScaler for feature scaling</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">5. Model Training</div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>RandomForest Regressor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>GradientBoosting Regressor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>XGBoost Regressor</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">6. Validation & Tuning</div>
              <div className="text-sm text-gray-700">5-fold cross-validation, hyperparameter optimization</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow">
              <div className="font-bold text-purple-900 mb-2">7. Model Persistence</div>
              <div className="text-xs bg-purple-100 p-2 rounded font-mono">
                models/*.pkl, scaler.pkl, feature_selector.pkl
              </div>
            </div>
          </div>
        </div>

        {/* Inference Pipeline */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-2 border-pink-400 shadow-lg">
          <h2 className="text-2xl font-bold text-pink-900 mb-4">Inference Pipeline</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">1. HLD Input</div>
              <div className="text-sm text-gray-700">Generated HLD.md document from pipeline</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">2. Feature Extraction</div>
              <div className="text-sm text-gray-700">Extract same 37 features from HLD document</div>
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                <div className="bg-pink-50 p-1 rounded">Parse markdown</div>
                <div className="bg-pink-50 p-1 rounded">Count sections</div>
                <div className="bg-pink-50 p-1 rounded">Analyze completeness</div>
                <div className="bg-pink-50 p-1 rounded">Calculate metrics</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">3. Feature Selection</div>
              <div className="text-sm text-gray-700">Apply saved feature selector (top 25)</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">4. Normalization</div>
              <div className="text-sm text-gray-700">Apply saved StandardScaler</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">5. Ensemble Prediction</div>
              <div className="text-sm text-gray-700 mb-2">Load 3 trained models and predict:</div>
              <div className="space-y-1 text-xs">
                <div className="bg-pink-50 p-2 rounded">Model 1 (RF): Score A</div>
                <div className="bg-pink-50 p-2 rounded">Model 2 (GB): Score B</div>
                <div className="bg-pink-50 p-2 rounded">Model 3 (XGB): Score C</div>
                <div className="bg-pink-100 p-2 rounded font-bold">Final = (A + B + C) / 3</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">6. Quality Score Output</div>
              <div className="text-lg text-center py-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg font-bold text-gray-800">
                Quality Score: 0-100
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300 shadow">
              <div className="font-bold text-pink-900 mb-2">7. Feature Importance</div>
              <div className="text-sm text-gray-700">Analysis of which features contributed most to score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-400 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key ML Features (37 Total)</h3>
        <div className="grid grid-cols-4 gap-3 text-sm">
          {[
            'Total word count', 'Section count', 'API endpoints', 'Security mentions',
            'Readability score', 'Average sentence length', 'Diagram count', 'NFR coverage',
            'Risk analysis depth', 'Integration count', 'Use case count', 'Entity count',
            'Code completeness', 'Documentation quality', 'Structure coherence', 'Technical depth'
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-2 rounded border border-gray-300 text-center">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WorkflowModesView = () => (
    <div className="space-y-6">
      <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300">
        <h2 className="text-2xl font-bold text-orange-900 mb-6">Workflow Execution Modes</h2>

        <div className="space-y-6">
          {/* Sequential */}
          <div className="bg-white p-6 rounded-xl border-2 border-blue-400 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-blue-900">Sequential Workflow</h3>
            </div>
            <div className="text-gray-700 mb-4">Linear execution of all 6 nodes in order</div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['PDF', 'Auth', 'Domain', 'Behavior', 'Diagram', 'Output'].map((node, idx) => (
                <React.Fragment key={node}>
                  <div className="bg-blue-100 px-4 py-3 rounded-lg border-2 border-blue-400 min-w-24 text-center shadow">
                    <div className="font-semibold text-sm">{node}</div>
                  </div>
                  {idx < 5 && <div className="text-2xl text-blue-600 font-bold">→</div>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded text-sm">
              <span className="font-semibold">Best for:</span> Simple requirements, predictable processing, debugging
            </div>
          </div>

{/* Parallel Workflow */}
<div className="bg-white p-6 rounded-xl border-2 border-green-400 shadow-lg">

  {/* Title */}
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
    <h3 className="text-xl font-bold text-green-900">Parallel Workflow</h3>
  </div>

  <div className="text-gray-700 mb-6">
    Concurrent execution of Domain, Auth, and Behavior nodes after PDF extraction
  </div>

  {/* Horizontal Flow */}
  <div className="flex flex-wrap items-center justify-center gap-8">

    {/* PDF Extraction */}
    <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[150px]">
      <div className="font-semibold">PDF Extraction</div>
    </div>

    {/* Arrow */}
    <div className="text-3xl font-bold text-green-600">→</div>

    {/* Parallel Vertical Stack */}
    <div className="flex flex-col items-center gap-3">

      <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[150px]">
        <div className="font-semibold">Domain</div>
        <div className="text-xs text-gray-600 mt-1">Parallel</div>
      </div>

      <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[150px]">
        <div className="font-semibold">Auth</div>
        <div className="text-xs text-gray-600 mt-1">Parallel</div>
      </div>

      <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[150px]">
        <div className="font-semibold">Behavior</div>
        <div className="text-xs text-gray-600 mt-1">Parallel</div>
      </div>

    </div>

    {/* Arrow */}
    <div className="text-3xl font-bold text-green-600">→</div>

    {/* Coordinator */}
    <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[180px]">
      <div className="font-semibold">Parallel Coordinator</div>
      <div className="text-xs text-gray-600 mt-1">Merge Results</div>
    </div>

    {/* Arrow */}
    <div className="text-3xl font-bold text-green-600">→</div>

    {/* Diagram Agent */}
    <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[150px]">
      <div className="font-semibold">Diagram</div>
    </div>

    {/* Arrow */}
    <div className="text-3xl font-bold text-green-600">→</div>

    {/* Output */}
    <div className="bg-green-100 px-4 py-3 rounded-lg border-2 border-green-400 shadow text-center min-w-[120px]">
      <div className="font-semibold">Output</div>
    </div>

  </div>

  {/* Notes */}
  <div className="mt-6 bg-green-50 p-3 rounded text-sm">
    <span className="font-semibold">Best for:</span> Performance optimization, independent node processing, faster execution
  </div>
  <div className="mt-2 bg-yellow-50 border border-yellow-300 p-3 rounded text-sm">
    <AlertTriangle className="w-4 h-4 inline mr-2 text-yellow-600" />
    <span className="font-semibold">Note:</span> Uses parallel coordinator to merge concurrent results
  </div>

</div>


{/* Conditional */}
<div className="bg-white p-6 rounded-xl border-2 border-purple-400 shadow-lg">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
    <h3 className="text-xl font-bold text-purple-900">Conditional Workflow</h3>
  </div>

  <div className="text-gray-700 mb-4">
    Dynamic routing based on content analysis and requirements
  </div>

  {/* MAIN FLOW */}
  <div className="flex items-center justify-center gap-6 mt-6">

    {/* 1️⃣ PDF Extraction */}
    <div className="bg-purple-100 px-5 py-3 rounded-lg border-2 border-purple-400 shadow text-center">
      <div className="font-semibold">PDF Extraction</div>
    </div>

    <div className="text-2xl text-purple-600 font-bold">→</div>

    {/* 2️⃣ Auth Integrations */}
    <div className="bg-purple-200 px-5 py-3 rounded-lg border-2 border-purple-500 shadow text-center">
      <div className="font-semibold">Auth Integrations</div>
    </div>

    <div className="text-2xl text-purple-600 font-bold">→</div>

    {/* 3️⃣ CONDITIONAL AREA */}
    <div className="flex flex-col items-center gap-6">

      {/* Branch from Auth */}
      <div className="flex items-center gap-3">
        {/* API route */}
        <div className="bg-purple-100 px-4 py-3 rounded-lg border-2 border-purple-400 shadow w-44 text-center">
          <div className="font-semibold">Domain API Design</div>
          <div className="text-xs text-gray-600 mt-1">If API Content</div>
        </div>

        <div className="text-2xl text-purple-600 font-bold">→</div>

        {/* Common Behavior Node */}
        <div className="bg-purple-100 px-4 py-3 rounded-lg border-2 border-purple-400 shadow w-40 text-center">
          <div className="font-semibold">Behavior</div>
        </div>
      </div>

      {/* Non-API route (direct to same Behavior node) */}
      <div className="flex items-center gap-3">
        <div className="text-gray-500 w-44 text-center text-xs">
          If No API Content
        </div>

        <div className="text-2xl text-purple-600 font-bold">→</div>

        {/* Same Behavior box shown visually in same row above */}
        <div className="bg-purple-100 px-4 py-3 rounded-lg border-2 border-purple-400 shadow w-40 text-center opacity-60">
          <div className="font-semibold">Behavior</div>
          <div className="text-xs text-gray-500">(same node)</div>
        </div>
      </div>

    </div>

    <div className="text-2xl text-purple-600 font-bold">→</div>

    {/* 4️⃣ Behavior → Diagram (horizontal) */}
    <div className="flex items-center gap-3">

      <div className="bg-purple-100 px-4 py-3 rounded-lg border-2 border-purple-400 shadow w-40 text-center">
        <div className="font-semibold">Diagram</div>
        <div className="text-xs text-gray-600 mt-1">If Domain Exists</div>
      </div>

      <div className="text-2xl text-purple-600 font-bold">→</div>

      {/* 5️⃣ Output */}
      <div className="bg-purple-100 px-5 py-3 rounded-lg border-2 border-purple-400 shadow text-center">
        <div className="font-semibold">Output Composition</div>
      </div>

    </div>

  </div>

  <div className="mt-4 bg-purple-50 p-3 rounded text-sm">
    <span className="font-semibold">Best for:</span> Adaptive routing, API-aware decisions, conditional diagram generation
  </div>
</div>




        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow Mode Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-semibold">Feature</th>
                <th className="p-3 text-left font-semibold">Sequential</th>
                <th className="p-3 text-left font-semibold">Parallel</th>
                <th className="p-3 text-left font-semibold">Conditional</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-semibold">Execution Speed</td>
                <td className="p-3">Slower ⚡</td>
                <td className="p-3 text-green-700">Fastest ⚡⚡⚡</td>
                <td className="p-3 text-blue-700">Medium ⚡⚡</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Resource Usage</td>
                <td className="p-3">Low</td>
                <td className="p-3 text-orange-700">High</td>
                <td className="p-3 text-green-700">Optimized</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Complexity</td>
                <td className="p-3 text-green-700">Simple</td>
                <td className="p-3 text-orange-700">Moderate</td>
                <td className="p-3 text-red-700">Complex</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Best Use Case</td>
                <td className="p-3">Debugging, simple docs</td>
                <td className="p-3">Large documents</td>
                <td className="p-3">Varied requirements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <SystemHeader />
        <ViewSelector />
        
        {selectedView === 'complete' && <CompleteArchitecture />}
        {selectedView === 'hld-pipeline' && <HLDPipelineView />}
        {selectedView === 'ml-pipeline' && <MLPipelineView />}
        {selectedView === 'workflows' && <WorkflowModesView />}

        {/* Legend */}
        <div className="mt-8 bg-white p-6 rounded-xl border-2 border-gray-300 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Architecture Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-200 border-2 border-indigo-400 rounded"></div>
              <span>User Interface Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-200 border-2 border-green-400 rounded"></div>
              <span>Orchestration Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan-200 border-2 border-cyan-400 rounded"></div>
              <span>HLD Pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-200 border-2 border-purple-400 rounded"></div>
              <span>ML Pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-200 border-2 border-amber-400 rounded"></div>
              <span>AI Agent Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 border-2 border-gray-400 rounded"></div>
              <span>Storage Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-600" />
              <span>Active Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Completed Step</span>
            </div>
          </div>
        </div>

        {/* Key Features Summary */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Key Architectural Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">🔄 Event-Driven Updates</div>
              <div className="text-blue-100">Real-time streaming from workflow to UI for live progress monitoring</div>
            </div>
            <div>
              <div className="font-semibold mb-2">🤖 Agent-Based Architecture</div>
              <div className="text-blue-100">6 specialized AI agents powered by Google Gemini for intelligent processing</div>
            </div>
            <div>
              <div className="font-semibold mb-2">📊 Dual Pipeline Design</div>
              <div className="text-blue-100">Independent HLD generation and ML quality scoring pipelines</div>
            </div>
            <div>
              <div className="font-semibold mb-2">⚡ Flexible Execution Modes</div>
              <div className="text-blue-100">Sequential, parallel, and conditional workflows for different use cases</div>
            </div>
            <div>
              <div className="font-semibold mb-2">🎯 State Management</div>
              <div className="text-blue-100">Pydantic-based type-safe state with reducer pattern for parallel safety</div>
            </div>
            <div>
              <div className="font-semibold mb-2">🔮 Ensemble ML Scoring</div>
              <div className="text-blue-100">3-model ensemble (RF, GB, XGB) for robust quality predictions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;