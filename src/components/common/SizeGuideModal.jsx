import { useState } from 'react';
import { X, Ruler } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tops'); // 'tops' | 'bottoms' | 'shoes'

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sizeGuideTitle"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(3px)', zIndex: 1070 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '12px' }}>
          <div className="modal-header border-bottom px-4 py-3">
            <div className="d-flex align-items-center gap-2">
              <Ruler size={20} className="text-accent" />
              <h5 className="modal-title font-serif mb-0" id="sizeGuideTitle">
                Atelier Sizing & Fit Guide
              </h5>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close size guide"
            />
          </div>

          <div className="modal-body p-4">
            {/* Tabs */}
            <ul className="nav nav-pills mb-4 gap-2 border-bottom pb-3">
              <li className="nav-item">
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'tops' ? 'btn-atelier-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('tops')}
                >
                  Shirts & T-Shirts
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'bottoms' ? 'btn-atelier-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('bottoms')}
                >
                  Pants & Trousers
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`btn btn-sm ${activeTab === 'shoes' ? 'btn-atelier-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab('shoes')}
                >
                  Footwear
                </button>
              </li>
            </ul>

            {/* Table Content */}
            {activeTab === 'tops' && (
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center small mb-3">
                  <thead className="table-light">
                    <tr>
                      <th>Size</th>
                      <th>Chest (in / cm)</th>
                      <th>Shoulder (in / cm)</th>
                      <th>Sleeve (in / cm)</th>
                      <th>Length (in / cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">XS</td>
                      <td>36" / 91cm</td>
                      <td>17.0" / 43cm</td>
                      <td>32.5" / 82cm</td>
                      <td>27.5" / 70cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">S</td>
                      <td>38" / 96cm</td>
                      <td>17.5" / 44cm</td>
                      <td>33.5" / 85cm</td>
                      <td>28.5" / 72cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">M</td>
                      <td>40" / 102cm</td>
                      <td>18.0" / 46cm</td>
                      <td>34.5" / 87cm</td>
                      <td>29.5" / 75cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">L</td>
                      <td>42" / 107cm</td>
                      <td>18.5" / 47cm</td>
                      <td>35.5" / 90cm</td>
                      <td>30.5" / 77cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">XL</td>
                      <td>44" / 112cm</td>
                      <td>19.0" / 48cm</td>
                      <td>36.5" / 92cm</td>
                      <td>31.5" / 80cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'bottoms' && (
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center small mb-3">
                  <thead className="table-light">
                    <tr>
                      <th>Waist Size</th>
                      <th>Natural Waist (in / cm)</th>
                      <th>Hip (in / cm)</th>
                      <th>Thigh (in / cm)</th>
                      <th>Inseam (in / cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">28</td>
                      <td>29" / 74cm</td>
                      <td>37" / 94cm</td>
                      <td>22" / 56cm</td>
                      <td>32" / 81cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">30</td>
                      <td>31" / 79cm</td>
                      <td>39" / 99cm</td>
                      <td>23" / 58cm</td>
                      <td>32" / 81cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">32</td>
                      <td>33" / 84cm</td>
                      <td>41" / 104cm</td>
                      <td>24" / 61cm</td>
                      <td>32" / 81cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">34</td>
                      <td>35" / 89cm</td>
                      <td>43" / 109cm</td>
                      <td>25" / 63cm</td>
                      <td>32" / 81cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">36</td>
                      <td>37" / 94cm</td>
                      <td>45" / 114cm</td>
                      <td>26" / 66cm</td>
                      <td>32" / 81cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'shoes' && (
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center small mb-3">
                  <thead className="table-light">
                    <tr>
                      <th>EU Size</th>
                      <th>US Men</th>
                      <th>US Women</th>
                      <th>UK Size</th>
                      <th>Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">39</td>
                      <td>6.5</td>
                      <td>8.5</td>
                      <td>6.0</td>
                      <td>24.8 cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">40</td>
                      <td>7.5</td>
                      <td>9.5</td>
                      <td>7.0</td>
                      <td>25.4 cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">41</td>
                      <td>8.0</td>
                      <td>10.0</td>
                      <td>7.5</td>
                      <td>26.0 cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">42</td>
                      <td>9.0</td>
                      <td>11.0</td>
                      <td>8.5</td>
                      <td>26.7 cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">43</td>
                      <td>10.0</td>
                      <td>12.0</td>
                      <td>9.5</td>
                      <td>27.3 cm</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">44</td>
                      <td>11.0</td>
                      <td>13.0</td>
                      <td>10.5</td>
                      <td>28.0 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Measuring tips */}
            <div className="p-3 bg-light rounded-2 mt-3">
              <h6 className="fw-semibold text-dark mb-1" style={{ fontSize: '13px' }}>
                How to Measure
              </h6>
              <p className="text-muted small mb-0">
                • <strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape horizontal.<br />
                • <strong>Waist:</strong> Measure around natural waistline where your trousers naturally sit.<br />
                • <strong>Fit Note:</strong> If in-between sizes, we recommend ordering one size up for a relaxed drape.
              </p>
            </div>
          </div>

          <div className="modal-footer border-top px-4 py-3">
            <button type="button" className="btn btn-atelier-secondary btn-sm" onClick={onClose}>
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
